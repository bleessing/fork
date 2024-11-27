import styles from "./RobotList.module.css";
import {WiTime3} from "react-icons/wi";
import CardTitle from "../cardTitle/CardTitle";
import Notification from "../notifacation/Notification";
import {Button, Flex, Form, Progress, Table} from "antd";
import { IoBatteryChargingOutline } from "react-icons/io5";

import  {robotSource, columns} from './robot';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {dataSource} from "../tasks/data";
import {FiCheck} from "react-icons/fi";
import {MdOutlineCancel} from "react-icons/md";
import {CiEdit} from "react-icons/ci";

const RobotList = () => {
   //  методы для таблицы
    const [form] = Form.useForm();
    const [data, setData] = useState(dataSource)
    const [editingKey, setEditingKey] = useState("")
    const [currentPage, setCurrentPage] = useState('2')


    const onChange = (page) => {
        setCurrentPage(page);
    }
    const pagination = {
        current: currentPage,
        pageSize: 5,
        total: data.length,
        onChange: onChange,
    }

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            orderId: '',
            time: '',
            mixtureType: '',
            robotId: '',
            loading: '',
            delivery: '',
            priority: '',
            status: '',
            ...record
        });
        setEditingKey(record.key);
    }
    const cancel = () =>{
        setEditingKey("")
    }
    const save = async (key) => {
        try {
            const row = await form.validateFields()
            const newData = [...data]
            const index = newData.findIndex((item) => key === item.key);
            if (index > -1){
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey("")
            }else {
                newData.push(row)
                setData(newData)
                setEditingKey("")
            }
        }catch (errInfo){
            console.log('Validate failed:', errInfo)
        }
    }
    const   columns = [

        {
            title: 'ID Робота',

            dataIndex: 'robotId',
            key: 'robotId'
        },
        {
            title: <IoBatteryChargingOutline size={'30px'}  color={"#007AFF"}  />,
            dataIndex: 'accumulate',

            key: 'accumulate',
            render: (accumulate, record) => {
                let currentColor;
                if (accumulate >= 80 && accumulate <= 100) {
                    currentColor = '#2d9b2b'; // Желтый
                } else if (accumulate >= 60 && accumulate <= 79) {
                    currentColor = '#ffd700'; // Оранжевый
                } else if (accumulate >= 40 && accumulate <= 59) {
                    currentColor = '#ffa500'; // Темно-оранжевый
                } else if (accumulate >= 20 && accumulate <= 39) {
                    currentColor = '#e12c2c'; // Красный
                } else if (accumulate >= 0 && accumulate <= 19) {
                    currentColor = '#d40000'; // Красный
                }
                return(
                    <Progress
                        type="dashboard"
                        steps={10}
                        percent={record.accumulate}
                        trailColor="rgba(0, 0, 0, 0.06)"
                        strokeWidth={20}
                        size={40}
                        strokeColor={currentColor}
                    />
                )

            }

        },
        {
            title: 'Задача',
            dataIndex: 'task',
            key: 'task',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (status, record) => {
                const lowerStatus = status.toLowerCase();
                const validStatuses = ['парковка', 'выполнение', 'ожидание', 'зарядка'];

                if (validStatuses.includes(lowerStatus) ) {
                    return (
                        <>
                            <p>{record.status}</p>

                            {lowerStatus === 'выполнение'  && (
                                <Progress percent={record.taskpersent}  strokeColor={'#17B26A'}/>
                            )}
                            {lowerStatus === 'зарядка' && (
                                <Progress percent={record.taskpersent}  strokeColor={
                                    {
                                        from:"#ffa500",
                                        to: "#2d9b2b",
                                    }
                                }/>
                            )}

                            </>

                   )

                }
            }

        },
        {
            title: "назначение",
            dataIndex: 'delivery',
            key: 'delivery',

        },
        {
            title: 'Действия',
            dataIndex: 'action',
            key: 'actions',
            render: (_, record) => {
                const editable = isEditing(record)
                return editable ? (
                    <Flex gap={'10px'} >
                        <Button
                            shape="circle"
                            icon={<FiCheck  color={'#fff'} />}
                            className={styles.button}
                            style={{ backgroundColor: '#6BA4FE' }}
                            onClick={() => save(record.key)}
                        />
                        <Button
                            shape="circle"
                            icon={<MdOutlineCancel color={'#fff'} />}
                            className={styles.button}
                            style={{ backgroundColor: '#CB3434' }}
                            onClick={cancel}
                        />
                    </Flex>
                ) : (
                    <Flex gap={'10px'}>
                        <Button
                            shape="circle"
                            icon={<CiEdit color={'#fff'} />}
                            className={styles.button}
                            style={{ backgroundColor: '#6BA4FE' }}
                            onClick={() => edit(record)}
                        />
                        <Button
                            shape="circle"
                            icon={<MdOutlineCancel color={'#fff'} />}
                            className={styles.button}
                            style={{ backgroundColor: '#CB3434' }}
                        />
                    </Flex>
                );
            }
        }
    ]

   // const [data, setData]= useState([]);
   // useEffect(() => {
   //     const apiUrl = `https://679870bcaac82512.mokky.dev/robotsList`;
   //     axios.get(apiUrl).then((response) =>{
   //         const allData = response.data;
   //         setData(allData);
   //         console.log(allData);
   //     }).catch(error => console.log(error, 'ошибка получения запроса'));
   // })
    return(
        <>
            <section className={styles.section}>
                <div className={styles.section_header}>
                    <div className={styles.title}>
                            <WiTime3 color={"#007AFF"} size={'32px'}/>
                        <CardTitle title="Заказы в сборке"/>
                    </div>
                    <Notification text={'Обозначения'}/>
                </div>
                {/*    component таблицы*/}
                <Table dataSource={robotSource} columns={columns} pagination={false}  >

                </Table>
                <div className={styles.button_end}>
                    <Button  variant={'solid'} color={'danger'}>Экстренный общий стоп</Button>
                </div>



            </section>
        </>

    )
}
export default RobotList;

