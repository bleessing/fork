import React from 'react';
import styles from './Panel.module.css';
import {Button, Col, Form, Input, Row} from "antd";
const Panel = () => {
    return (
        <div className={styles.form}>
            <span className={styles.title}>Панель информации</span>
            <div className={styles.box}>

                <Form.Item label={'Заряд батареи'}>
                    <Input size={"small"} style={{
                        width: '30%',
                    }}/>
                </Form.Item>
                <Form.Item label={"Текущий статус"}>
                    <Input size={"small"} style={{
                        width: '30%',
                    }}/>
                </Form.Item>
                <Form.Item label={'Последня задача'}>
                    <Input size={"small"} style={{
                        width: '30%',
                    }}/>
                </Form.Item>
                <Form.Item label={'Статус сети'}>
                    <Input size={"small"} style={{
                        width: '30%',
                    }}/>
                </Form.Item>
                <Form.Item label={'Наработка'}>
                    <Input size={"small"} style={{
                        width: '30%',
                    }}/>
                </Form.Item>
                <Form.Item label={'До следующего ТО'}>
                    <Input size={"small"} style={{
                        width: '30%',
                    }}/>
                </Form.Item>


            </div>

        </div>
    );
};

export default Panel;