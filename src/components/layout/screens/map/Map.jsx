import React from 'react';
import styles from './Map.module.css';
import DashboardCanvas from "../../../ui/canvas/DashboardCanvas";

const Map = () => {
    return (
        <div className={styles.main}>
            <DashboardCanvas/>

        </div>
    );
};

export default Map;