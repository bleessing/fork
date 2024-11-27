import React from 'react';
import styles from './Control.module.css';
import {Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import MenuItem from "antd/es/menu/MenuItem";
import {Content} from "antd/es/layout/layout";
import {
    UndoOutlined,
    RedoOutlined,
    StopOutlined,
    ThunderboltOutlined,
} from '@ant-design/icons';
import { GiForklift } from "react-icons/gi";
import ControlSection from "../../../ui/contolsection/ControlSection";
import VideoPanel from "../../../ui/videoPanel/VideoPanel";

const Control = () => {
    const items = [
        {
            key: '1',
            icon: <GiForklift size={20} />,
            label: 'Штабелер N1',
        },
        {
            key: '2',
            icon: <GiForklift size={20} />,
            label: 'Штабелер N2',
        },
        {
            key: '3',
            icon: <GiForklift size={20} />,
            label: 'Штабелер N3',
        },
        {
            key: '4',
            icon: <GiForklift size={20} />,
            label: 'Штабелер N4',
        },
    ];

    return (
        <div className={styles.main}>
            <Layout style={{
                paddingTop: 40,
                border: 8,
                background: '#b6fa49',
            }}>
                <Sider width={200}
                style={{backgroundColor: '#6BA4FE'}}>
                    <Menu theme={"dark"} mode={'inline'}

                          items={items}
                          defaultSelectedKeys={['1']}
                    style={{
                        height: '100%',
                        borderRight: 0,
                    }}/>

                </Sider>
                <Layout style={{

                }}>
                    <Content style={{
                        padding: '24px',
                        margin: 0,
                        minHeight: 280,
                        background: "RGB(156, 93, 254)",
                        borderRadius: "8px",
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <ControlSection/>
                        <VideoPanel/>

                    </Content>

                </Layout>

            </Layout>
        </div>
    );
};

export default Control;