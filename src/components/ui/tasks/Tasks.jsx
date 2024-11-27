import styles from './Tasks.module.css';
import {WiTime3} from "react-icons/wi";
import CardTitle from "../cardTitle/CardTitle";
import Notification from "../notifacation/Notification";
import { CiEdit } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import {dataSource} from './data'
import {Button, Flex, Form, Input, InputNumber,  Progress, Table} from "antd";
import {useEffect, useState} from "react";


const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...props

}) => {
const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;
return (
    <td {...props}>
        {editing ? (
            <Form.Item
                name={dataIndex}
                style={{
                    margin: 0,
                }}
                rules={[
                    {
                        required: true,
                        message: `Please Input ${title}!`,
                    },
                ]}
            >
                {inputNode}
            </Form.Item>
        ) : (
            children
        )}
    </td>
)
}


const Tasks = () => {
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

    // запрос на получение данных с сервера /task
    // const [data, setData] = useState([]);
    // useEffect(() =>{
    //     axios.get('https://localhost')
    //         .then(response => {
    //             setData(response.data.map((item, index) => ({...item, key: index})));
    //         }).catch(error => console.log('ошибка при загруке данных с сервера',error));
    // },[])

    // написать запрос на обновление данных p






const columns = [
    {
        title: 'ID заказа',
        dataIndex: 'orderId',
        key: 'orderId',
    },
    {
        title: 'Время',
        dataIndex: 'time',
        key: 'time',


    },
    {
        title: 'Тип смеси',
        dataIndex: 'mixtureType',
        key: 'mixtureType',
        editable: true,

    },
    {
        title: 'ID робота',
        dataIndex: 'robotId',
        key: 'robotId',

    },
    {
        title: 'Погрузка',
        dataIndex: 'loading',
        key: 'loading',
        editable: true,

    },
    {
        title: 'Поставка',
        dataIndex: 'delivery',
        key: 'delivery',
        editable: true,

    },
    {
        title: 'Приоритет',
        dataIndex: 'priority',
        key: 'priority',
        editable: true,

    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
        render: (status, record) => {
            const lowerStatus = status.toLowerCase();

            if (lowerStatus === "выполняется") {
                return (
                    <>
                        <p>{record.status}</p>
                        <Progress percent={record.progress} status={'active'}/>
                    </>)

            }
            if (lowerStatus === "готово") {
                return (
                    <>
                        <p>{record.status}</p>
                        <Progress percent={record.progress} status={'success'}/>
                    </>
                )
            }
            if (lowerStatus === "отмена") {
                return (
                    <>
                        <p>{status}</p>
                        <Progress percent={record.progress} status={"exception"}/>
                    </>
                )
            } else {
                return (
                    <>
                        <p>{record.status}</p>
                            <Progress percent={record.progress} status={'normal'} strokeColor={'#e3ab12'} />
                    </>
                )
            }

        },
        editable: true
    },
    {
        title: 'Действия',
        dataIndex: 'actions',
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
    },
];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <section className={styles.section}>
            <div className={styles.section_header}>
                <div className={styles.title}>
                    <WiTime3 color={"#007AFF"} size={'32px'}/>
                    <CardTitle title="Заказы в сборке"/>
                </div>
                <Notification text={'Обозначения'}/>
            </div>
            <Form form={form} component={false} >
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={pagination     }
//                     pagination={
//
//                         <Pagination current={currentPage} onChange={onChange} total={50}/>
// }

                />
            </Form>
        </section>

    )
}
export default Tasks;