import Header from "./header/Header";

import styles from './Layout.module.css'

const Layout = ({ children, backLink }) => {
    return (
        <section className={styles.layout}>

            <Header  />
            {children}
        </section>

    )
}
export default Layout;