import React from 'react';
import styles from "./Imap.module.css";
import { SiGooglemaps } from "react-icons/si";
import CardTitle from "../cardTitle/CardTitle";

const IMap = () => {
    return (
        <div className={styles.map}>
            <div className={styles.title}>
                <SiGooglemaps  color={"#007AFF"} size={'24px'}/>
                <CardTitle title="Интерактивная карта склада"/>
            </div>

        </div>
    );
};

export default IMap;