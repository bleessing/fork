import React, {useState} from 'react';
import CardTitle from "../cardTitle/CardTitle";
import { CiCircleList } from "react-icons/ci";
import styles from './RobotService.module.css'
import {Button, Space, Table} from "antd";
import {dataSource} from "../tasks/data";


export const robotSource = [
    {
        key: '1',
        robotId: 'R323400',
        status: 'нормальное',
        accumulate: '45%',
        time: 121,
        timeService: '16/03/24',
        action: 'нормальное',
    },
    {
        key: '2',
        robotId: 'R323401',
        status: 'сбой',
        accumulate: '5%',
        time: 431,
        timeService: '16/03/24',
        action: 'сбой',
    },
    // Добавьте другие данные по мере необходимости
]

const RobotService = () => {
    const [filteredData, setFilteredData] = useState(robotSource);
    const handleFilter = (status) => {
        const filtered = robotSource.filter(item => item.status === status);
        setFilteredData(filtered);
    }
    const handleResetFilter = () => {
        setFilteredData(null);
    }

    const getRowClassName = (record) => {
        if(record.status === 'нормальное'){
            return styles.success_row
        }else if(record.status === 'сбой'){
            return styles.error_row
        }
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'robotId',
            key: 'robotId',
            width: '10',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            width: '10',
        },
        {
            title: 'Заряд',
            dataIndex: 'accumulate',
            key: 'accumulate',
            width: '10',
        },
        {
            title: 'Наработ/Часы',
            dataIndex: 'time',
            key: 'time',
            width: '10',
        },
        {
            title: 'Дата обслуживания',
            dataIndex: 'timeService',
            key: 'timeService',
            width: '10',
        },
        {
            title: 'Действия',
            dataIndex: 'action',
            key: 'actions',
            width: 20,
            render: (status, record) => {
                if (status === 'нормальное') {
                    return (
                        <Button>Диагностика</Button>
                    );
                } else if (status === 'сбой') {
                    return (
                        <div style={{ width: '100%',   }}>
                            <Button>Диагностика</Button>
                            <Button>На обслуживание</Button>
                        </div>
                    );
                }
            }
        }
    ];
    return (
        <div className={styles.robot_list}>
            <div className={styles.robot_header}>
                <CiCircleList color={"#007AFF"} size={'24px'}/>
                <CardTitle title="Список роботов"/>
                <Space>
                    <Button onClick={() => handleFilter('нормальное')}>Показать нормальное</Button>
                    <Button onClick= {handleResetFilter}>Сбросить фильтры</Button>
                </Space>
            </div>
            <div className={styles.robot_table}>
            <Table columns={columns} dataSource={robotSource} pagination={false} size={'small'} rowClassName={getRowClassName}></Table>
            </div>


        </div>
    );
};

export default RobotService;