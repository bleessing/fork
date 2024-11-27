import styles from "./Dashboard.module.css";
import NewTask from "../../../ui/newTask/NewTask";
import Tasks from "../../../ui/tasks/Tasks";

const Dashboard = () => {
    return (
        <div className={styles.main}>
            <NewTask/>
            <Tasks/>
        </div>
    )
}
export default Dashboard;