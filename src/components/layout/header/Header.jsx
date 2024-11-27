import styles from './Header.module.css'
import Navbar from "../../ui/navbar/Navbar";

const Header = () =>{
    return (
        <header className={styles.header}>
            <Navbar/>
        </header>
    )
}
export default Header;