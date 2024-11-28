import useAuth from "../../../hooks/useAuth";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ImHome} from "react-icons/im";
import {SiBattledotnet} from "react-icons/si";
import {BiTask} from "react-icons/bi";
import {MdForklift} from "react-icons/md";
import {FaMapMarkerAlt} from "react-icons/fa";
import {IoChevronBack} from "react-icons/io5";
import {FaUser} from "react-icons/fa";
import {IoIosNotificationsOutline} from "react-icons/io";
import styles from './Navbar.module.css'
import {Collapse} from "antd";

import cn from 'classnames';
import UserProfile from "../userprofile/UserProfile";

function    Navbar() {
    // const {isAuthenticated} = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const isActive = (path) => {
        return location.pathname === path;
    }
    const navItems = [
        {to: "/main", icon: <ImHome size={"22px"}/>, text: "Главная"},
        {to: "/control", icon: <SiBattledotnet size={"24px"}/>, text: "Управление"},
        {to: "/dashboard", icon: <BiTask size={"24px"}/>, text: "Задачи"},
        {to: "/none", icon: <MdForklift size={"24px"}/>, text: "Обслуживание"},
        {to: "/map", icon: <FaMapMarkerAlt size={"24px"}/>, text: "Карта"},
        {to: "/admin", icon: <FaUser size={"22px"} color={'#98A2B3'}/>, text: "Admin"},
    ]

    return (
        <nav>

            <ul className={styles.nav_list}>
                <div className={styles.logo_box}>
                <Link to={'..'} onClick={() => navigate(-1)} className={styles.logo}>
                    <img src={"Tatneft-Logo.wine.svg"}/>
                </Link>
                </div>


                {navItems.map((item, index) => (
                    <Link key={index} to={item.to}
                          className={cn(styles.nav_item, {[styles.active]: isActive(item.to)})}>
                        {item.icon}
                        {item.text && <span>{item.text}</span>}
                    </Link>
                ))}
                <div className={styles.notification}>
                    <IoIosNotificationsOutline size={"28px"} color={'#007AFF'} className={styles.svg}/>
                </div>
                <div>
                <UserProfile name={'Иванов И.'} role={'admin'} image={'agnia.jpg'}/>
                </div>


                {/*{isAuthenticated ? <Link to={'/logout'}>Logout</Link> : <Link to={'/auth'}>Login</Link>}*/}
            </ul>
        </nav>
    )
}

export default Navbar;