import styles from './CardTitle.module.css'
const CardTitle = ({ title, image }) => {
    return (
        <>

            <p className={styles.title}>{title}</p>
        </>
    )
}
export default CardTitle