import React from 'react';
import styles from './TasksStatistic.module.css';
import CardTitle from "../cardTitle/CardTitle";
import {ImStatsBars2} from "react-icons/im";
import {LuCalendarDays} from "react-icons/lu";
import {LuCalendarCheck} from "react-icons/lu";
import {HiMiniClock} from "react-icons/hi2";
import {MdOutlineCancel} from "react-icons/md";
import StatItem from "./statItem/StatItem";

const TaskStatistic = () => {
    return (
        <div className={styles.statistic}>
            <div className={styles.title}>
                <ImStatsBars2 color={"#007AFF"} size={'24px'}/>
                <CardTitle title="Статистика задач"/>
            </div>
            <div className={styles.list}>
                <StatItem status={'В очереди'} count={'4'} icon={<LuCalendarDays size={'30px'} color={'#007AFF'}/>}/>
                <StatItem status={'В процессе'} count={'2'} icon={<LuCalendarCheck size={'30px'} color={'#489e21'}/>}/>
                <StatItem status={'Готово'} count={'36'} icon={<HiMiniClock size={'30px'} color={'#007AFF'}/>}/>
                <StatItem status={'Сбой'} count={'0'} icon={<MdOutlineCancel size={'30px'} color={'#FF0000'}/>}/>
            </div>
        </div>
    );
};

export default TaskStatistic;