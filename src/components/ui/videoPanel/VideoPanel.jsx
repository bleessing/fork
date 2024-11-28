import React from 'react';
import styles from './VideoPanel.module.css'
import {Button, Flex, Radio, Table} from "antd";

const VideoPanel = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Дата',
            dataIndex: 'date',
            key: 'date',
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
        },
        {
            title: 'Зона',
            dataIndex: 'zone',
            key: 'zone',
        },
    ];
    const data = [
        {
            key: '1',
            id: 'R323400',
            date: '12/10/24',
            task: '123-16',
            status: '123-16',
            zone: '123-16',
        },
        // Добавьте другие строки данных по мере необходимости
    ];
    const options = [
        {
            label: 'Video',
            value: 'video',
        },
        {
            label: 'Map',
            value: 'Карта'
        }
    ]
    return (
        <div className={styles.column}>

            <div className={styles.form}>
                <Flex vertical gap={"middle"}>
                    <Radio.Group block
                                 options={options}
                                 buttonStyle={"solid"}
                                 optionType={'button'}
                                 defaultValue={'video'}/>

                    <iframe
                        className={styles.video}
                        title="Live Video"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/fNUXtSQSgWM"
                        frameBorder=""
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>
                    <div className={styles.video_footer}>
                        <span className={styles.title}>Видео с текущего положения</span>
                        <Button variant={"default"}>Обновить</Button>
                    </div>

                </Flex>

            </div>
            <div className={styles.table}>
                <span>Отчет о состоянии</span>
                <Table columns={columns} dataSource={data} pagination={false}/>

            </div>

        </div>

    );
};

export default VideoPanel;