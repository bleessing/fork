import styles from './Main.module.css'
import RobotList from "../../../ui/robotList/RobotList";
import TaskStatistic from "../../../ui/taskStat/TaskStatistic";
import IMap from "../../../ui/interactiveMap/IMap";
import {Col, Row} from "antd";

const Main = () => {
    return (
        <div className={styles.main}>
            <Row>
                <Col span={12}><RobotList/></Col>
                <Col span={1}></Col>
                <Col span={11}>
                    <TaskStatistic/>
                         <IMap/></Col>
            </Row>
            </div>
        // <div className={styles.main}>
        //
        //
        //
        //     <div className={styles.right_section}>
        //         <TaskStatistic/>
        //         <IMap/>
        //     </div>
        //
        //
        // </div>
    )
}
export default Main;