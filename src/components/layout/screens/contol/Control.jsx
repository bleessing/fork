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
                border: 8,

            }}>
                <Sider width={250}  style={{
                    backgroundColor: "#F9FAFB"
                }}
                >
                    <Menu  mode={'inline'}

                          items={items}
                          defaultSelectedKeys={['1']}

                    style={{
                        borderRadius: 8,
                        backgroundColor: '#F2F4F7',

                    }}/>

                </Sider>
                <Layout style={{

                }}>
                    <Content style={{
                        padding: '24px',
                        margin: 0,
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