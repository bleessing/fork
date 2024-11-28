import React, {useState} from 'react';
import {AutoComplete, Button, Flex, Input, Radio, Select, Table} from "antd";
import styles from './HistoryService.module.css'

import {Option} from "antd/es/mentions";


const HistoryService = () => {
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
            title: 'Описание выпол. работ',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Статус обслуживания',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Ответственный специалист',
            dataIndex: 'responsible',
            key: 'responsible',
        },
        {
            title: 'Следующее тех. обслуживание',
            dataIndex: 'nextMaintenance',
            key: 'nextMaintenance',
        },
    ];
    const options = [
        {
            label: 'История обслуживания',
            value: 'history',
        },
        {
            label: 'Отчеты о неисправностях',
            value: 'result'
        }
    ];

    const [filters, setFilters] = useState({
        status: '',
        responsible: '',
    });

    const handleFilterChange = (filterKey, value) => {
        setFilters({
            ...filters,
            [filterKey]: value,
        });
    };



    return (
        <div className={styles.form}>
            <Flex vertical gap="middle">
                <Radio.Group block
                             className={styles.radioButton}
                             options={options}
                             buttonStyle={"solid"}
                             optionType={'button'}
                             defaultValue={'history'}/>
            </Flex>
            <div className={styles.filters}>
                <Select
                    placeholder="Фильтр по статусу"
                    style={{ width: 200, marginRight: 10 }}
                    value={filters.status}
                    onChange={(value) => handleFilterChange('status', value)}
                >
                    <Option value="">Все</Option>
                    <Option value="Выполнено">Фильтр</Option>
                    <Option value="В работе">Фильтр</Option>
                    <Option value="Отложено">Фильтр</Option>
                </Select>

                <AutoComplete

                    style={{
                    width: 150,
                }}>
                    <Input.Search  placeholder="Поиск" enterButton />
                </AutoComplete>
            </div>
            <div className={styles.table}>
                <Table columns={columns} bordered />
            </div>


        </div>
    );
};

export default HistoryService;