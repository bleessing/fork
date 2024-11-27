import {Select} from "antd";
import styles from './Select.module.css'
const SelectItem =({label, defaultValue,options, ...rest}) => {
    return(
        <div className={styles.select} >
            <label htmlFor="select" className={styles.label}>{label}</label>
            <Select
                defaultValue={defaultValue}
                options={options}
                {...rest}

            ></Select>
        </div>
    )
}
export default SelectItem;