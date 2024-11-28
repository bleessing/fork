
import styles from './UserProfile.module.css'
import {Dropdown, Space} from "antd";
import { DownOutlined, SettingOutlined} from '@ant-design/icons'


const UserProfile = ({header,image, name, role}) => {
    const items = [

        {
            key: '2',
            label: 'Profile',

        },
        {
            key: '3',
            label: 'Billing',

        },
        {
            key: '4',
            label: 'Settings',
            icon: <SettingOutlined />,

        },
    ];
    return(

        <Dropdown menu={{items}} className={styles.user_profile}>
            <a onClick={(e) => e.preventDefault()} className={styles.user_profile}>
                <img src={image} className={styles.user_img}/>
                <Space>
                    <div>
                    <p>{name}</p>
                    <p><strong>{role}</strong></p>
                    </div>
                    <DownOutlined/>
                </Space>
            </a>
        </Dropdown>



    )
}
export default UserProfile;