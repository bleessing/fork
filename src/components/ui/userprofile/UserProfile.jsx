
import styles from './UserProfile.module.css'
import {Dropdown, Space} from "antd";
import { DownOutlined, SettingOutlined} from '@ant-design/icons'


const UserProfile = ({header,image, name, role}) => {
    const items = [
        {
            key: '1',
            label: 'My Account',
            disabled: true,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Profile',
            extra: '⌘P',
        },
        {
            key: '3',
            label: 'Billing',
            extra: '⌘B',
        },
        {
            key: '4',
            label: 'Settings',
            icon: <SettingOutlined />,
            extra: '⌘S',
        },
    ];
    return(

        <Dropdown menu={{items}}>
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