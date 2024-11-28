import React from 'react';
import styles from './TechnicalService.module.css'
import {GrServices} from "react-icons/gr";
import CardTitle from "../cardTitle/CardTitle";
import {Button, Space, Table} from "antd";
const TechnicalService = () => {
    const columns = [
        {
            title: 'ID робота',
            dataIndex: 'robotId',
            key: 'robotId',

        },
        {
            title: 'Тип предупреждения',
            dataIndex: 'warningType',
            key: 'warningType',

        },
        {
            title: 'Описание проблемы',
            dataIndex: 'problemDescription',
            key: 'problemDescription',

        },
        {
            title: 'Дата предупреждения',
            dataIndex: 'warningDate',
            key: 'warningDate',

        },
        {
            title: 'Статус предупреждения',
            dataIndex: 'warningStatus',
            key: 'warningStatus',

        },
        {
            title: 'Приоритет',
            dataIndex: 'priority',
            key: 'priority',

        },
        {
            title: 'Ответственный специалист',
            dataIndex: 'responsibleSpecialist',
            key: 'responsibleSpecialist',

        },
    ];
    return (

        <div className={styles.form}>

                <div className={styles.robot_header}>
                    <GrServices color={"#007AFF"} size={'24px'}/>
                    <CardTitle title="Техническое обслуживание"/>
                    <Space>
                        <Button >Показать нормальное</Button>
                        <Button>Сбросить фильтры</Button>
                    </Space>
                </div>

                <Table columns={columns} bordered size={'small'} className={styles.table} scroll={{ x: 'max-content', y: 300 }}/>


        </div>
            );
            };

            export default TechnicalService;