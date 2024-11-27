import React from 'react';
import styles from './Server.module.css';
import RobotService from "../../../ui/robotService/RobotService";
import TechnicalService from "../../../ui/technicalService/TechnicalService";
import HistoryService from "../../../ui/historyService/HistoryService";
const Server = () => {
    return (
        <div className={styles.main}>
            <RobotService/>
            <div className={styles.right_section}>
                <TechnicalService/>
                <HistoryService/>
            </div>

        </div>
    );
};

export default Server;