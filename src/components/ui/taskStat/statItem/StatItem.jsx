import React from 'react';
import styles from './StatItem.module.css'
const StatItem = ({status, count, icon}) => {
    return (
        <div className={styles.stat_item}>
            <div className={styles.icon}>{icon}</div>
        <div className={styles.content}>
            <div className={styles.text}>{status}</div>
            <div className={styles.count}>{count}</div>
            
        </div>
        </div>
    );
};

export default StatItem;