import React, { useState } from 'react';
import './main-page.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Button, Menu, Space } from 'antd';
const { Footer, Sider, Content } = Layout;
import {
    CalendarOutlined,
    HeartFilled ,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LogoutOutlined,
    IdcardOutlined,
    TrophyFilled
  } from '@ant-design/icons';
import { JSX } from 'react/jsx-runtime';
import logoFit from '@public/fit.svg';
import logoClever from '@public/clever.svg';

import { Header } from '@components/header';
import { MainContent } from '@components/main-content';


export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    function getItem(label: string, key: string, icon: JSX.Element) {
        return {
            label,
            key,
            icon,
        };
      }
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const items = [
        getItem('Календарь', '1', <CalendarOutlined />),
        getItem('Тренировки', '2', <HeartFilled />),
        getItem('Достижения', '3', <TrophyFilled />),
        getItem('Профиль', '4', <IdcardOutlined />),
      ];

    return (
        <Layout className='flex'>

            <Sider
                theme='light'
                className='sider'
                width={208}
                collapsible={false}
                collapsedWidth={64}
                collapsed={collapsed}
                >
                <div className="sider-logo">
                    <img src={logoClever} alt="clever" className='sider-logo__clever' />
                    <img src={logoFit} alt="fit" className='sider-logo__fit' />
                </div>
                <div className="sider-menu">
                    <Space size={100} direction='vertical' align='center' >
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            inlineIndent={240}
                            theme='light'
                            items={items}
                            style={{ width: "208px" }}
                        />
                    </Space>
                    <Space size={100} direction='vertical' align='center' >
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        inlineIndent={240}
                        theme='light'
                        style={{ width: "208px" }}
                        items={[ {
                            key: '10',
                            icon: <LogoutOutlined />,
                            label: 'Выход',
                        },]}
                    />
                    </Space>
                </div>

            </Sider>
            <Layout style={{ width:'1000px' }}>
                <Header></Header>
                <Content className='main'>
                    <MainContent></MainContent>
                    <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    >
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                </Content>
                <Footer className=''></Footer>
            </Layout>
        </Layout>
    );
};
