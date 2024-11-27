import styles from './NewTask.module.css';

import { BiTask } from "react-icons/bi";
import CardTitle from "../cardTitle/CardTitle";
import {Button, Select} from "antd";
import {data} from './data'
import SelectItem from "../select/Select";
import React from "react";

import { FaPlus } from "react-icons/fa6";

const NewTask = () =>{

    return (
        <>
            <section className={styles.form}>
                <div className={styles.task_title}>
                    <BiTask color={"#007AFF"} size={'32px'}/>
                    <CardTitle title={'Новая задача'}/>
                </div>
                <div className={styles.selects}>

                    <SelectItem defaultValue={'Зона хранения'} options={data.options} label={'Зона хранения'} />
                    <SelectItem defaultValue={"линия №1"} options={data.lines} label={'Поставка'}/>
                    <SelectItem defaultValue={"№FM4242"} options={data.type}  label={'Тип'}/>
                    <SelectItem defaultValue={"1"} options={data.priority} label={'Приоритет'}/>
                    <Button color={"primary"} variant={"solid"}><FaPlus />Создать задачу</Button>
                </div>
            </section>

        </>
    )
}
export default NewTask;