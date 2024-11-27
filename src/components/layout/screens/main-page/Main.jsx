import styles from './Main.module.css'
import RobotList from "../../../ui/robotList/RobotList";
import TaskStatistic from "../../../ui/taskStat/TaskStatistic";
import IMap from "../../../ui/interactiveMap/IMap";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.box1}>
                <RobotList/>
            </div>
            <div className={styles.box2}>
                <TaskStatistic/>
                <IMap/>
            </div>


        </div>
    )
}
export default Main;