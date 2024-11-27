import React from 'react';
import styles from './TechnicalService.module.css'
import {GrServices} from "react-icons/gr";
import CardTitle from "../cardTitle/CardTitle";
import {Button, Space} from "antd";
const TechnicalService = () => {
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
        </div>
            );
            };

            export default TechnicalService;