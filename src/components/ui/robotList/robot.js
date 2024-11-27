import {IoBatteryChargingOutline} from "react-icons/io5";
import {Button, Flex, Progress} from "antd";
import React from "react";
import {FiCheck} from "react-icons/fi";
import styles from "../tasks/Tasks.module.css";
import {MdOutlineCancel} from "react-icons/md";
import {CiEdit} from "react-icons/ci";

export const robotSource = [
    {
        key: '1',
        robotId: 'R323401',
        accumulate: 80,
        task: '123-16',
        status: 'Парковка',
        delivery: "Линия",
        taskpersent: 10

    },
    {
        key: '2',
        robotId: 'R323402',
        accumulate: 40,
        task: '123-11',
        status: 'Выполнение',
        delivery: "Зона хранения",
        taskpersent: 20,

    },
    {
        key: '3',
        robotId: 'R323408',
        accumulate: 60,
        task: '123-12',
        status: 'Ожидание',
        delivery: "Подача 4",
        taskpersent: 30,

    },
    {
        key: '4',
        robotId: 'R323404',
        accumulate: 19,
        task: '123-11',
        status: 'Зарядка',
        delivery: "место 4",
        taskpersent: 80,

    },
    {
        key: '5',
        robotId: 'R323405',
        accumulate: 90,
        task: '123-13',
        status: 'Парковка',
        delivery: "Линия 2",
        taskpersent: 50,

    },
    {
        key: '6',
        robotId: 'R323406',
        accumulate: 10,
        task: '123-14',
        status: 'Выполнение',
        delivery: "Зона хранения 2",
        taskpersent: 70,

    },
]
