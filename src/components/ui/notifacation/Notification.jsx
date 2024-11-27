import styles from './Notification.module.css'

import { BsExclamationCircle } from "react-icons/bs";
import {Card, Popover} from "antd";
const Notification = ({text}) => {

    return (
        <Popover className={styles.notification} content={content} placement="topRight" >
            <p className={styles.notification_text} >{text}</p>
            <BsExclamationCircle  color={"#007AFF"} size={'28px'}/>
            </Popover>
    )
}
export default Notification;
const content = (
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>
);