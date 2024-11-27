import styles from './Filed.module.css'

const Field = ({register, name, options,  error, ...rest}) => {
    return (
    <div className={styles.group}>
        <input {...register(name, register)} {...rest} className={styles.input}  />
        {error && <div className={styles.error}>{error}</div>}
    </div>
    )
}
export default Field;