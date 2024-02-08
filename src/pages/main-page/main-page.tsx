import React, { useState } from 'react';
import './main-page.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Button, Menu, Typography, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import {
    CalendarOutlined,
    ContainerOutlined,
    HeartFilled ,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProfileOutlined,
    IdcardOutlined,
  } from '@ant-design/icons';
import { JSX } from 'react/jsx-runtime';
import logoFit from '../../img/fit.svg';
import logoClever from '../../img/clever.svg';


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
        getItem('Достижения', '3', <ContainerOutlined />),
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
                            icon: <ProfileOutlined />,
                            label: 'Выход',
                        },]}
                    />
                    </Space>
                </div>

            </Sider>
            <Layout>
                <Header className='header' style={{ background:"#f0f5ff" }}>
                      <Typography.Text>
                        Главная
                      </Typography.Text>
                      <div className="flex">
                        <Typography.Text>
                            Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!
                        </Typography.Text>
                        <Button>Настройки</Button>
                      </div>

                </Header>
                <Content className=''>
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
