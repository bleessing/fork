import React from 'react';
import {AutoComplete, Button, Flex, Input, Radio} from "antd";
import styles from './HistoryService.module.css'

const HistoryService = () => {
    const options = [
        {
            label: 'История обслуживания',
            value: 'history',
        },
        {
            label: 'Отчеты о неисправностях',
            value: 'result'
        }
    ]
    return (
        <div className={styles.form}>
            <Flex vertical gap="middle">
                <Radio.Group block
                             options={options}
                             buttonStyle={"solid"}
                             optionType={'button'}
                             defaultValue={'history'}/>
            </Flex>
            <div>
                <Button>фильтры</Button>
                <AutoComplete

                    style={{
                    width: 150,
                }}>
                    <Input.Search  placeholder="input here" enterButton />
                </AutoComplete>
            </div>

        </div>
    );
};

export default HistoryService;