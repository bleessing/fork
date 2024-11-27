import React from 'react';
import styles from './ControlSection.module.css'

import { GiHand } from "react-icons/gi";
import { BsSignStopFill } from "react-icons/bs";

import {Button} from "antd";
import Panel from "../panelInformation/Panel";
const ControlSection = () => {
    return (
        <div className={styles.form}>
            <div className={styles.header_control}>
                <Button>
                    <GiHand />
                    <span>Ручное упраление</span>
                </Button>
                <Button variant={'solid'} color={'danger'}  >
                    <BsSignStopFill />
                    <span>СТОП</span>
                </Button>
            </div>
            <div className={styles.information}>
                <Panel/>
                <div className={styles.box_buttons}>
                    <button className={styles.button}>Назначить задачу</button>
                    <button className={styles.button}>Отменить задачу</button>
                    <button className={styles.button}>Отправить на зарядку</button>
                    <button className={styles.button}>Диагностика состояния</button>

                </div>
            </div>
        </div>
    );
};

export default ControlSection;