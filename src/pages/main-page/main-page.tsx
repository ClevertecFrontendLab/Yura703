import React, { useState } from 'react';
import './main-page.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Button, Menu, Space } from 'antd';
const { Sider, Content } = Layout;
import {
    CalendarOutlined,
    HeartFilled ,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    IdcardOutlined,
    TrophyFilled,
    createFromIconfontCN,
  } from '@ant-design/icons';
import { JSX } from 'react/jsx-runtime';
import logoFit from '@public/fit.svg';
import logoClever from '@public/clever.svg';
import Icon, { HomeOutlined } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

import { Header } from '@components/header';
import { MainContent } from '@components/main-content';
import { Footer } from '@components/footer';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const CalendarSvg = () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 1.125H12C12.2766 1.125 12.5 1.34844 12.5 1.625V12C12.5 12.2766 12.2766 12.5 12 12.5H0.5C0.223437 12.5 0 12.2766 0 12V1.625C0 1.34844 0.223437 1.125 0.5 1.125H3.125V0.125C3.125 0.05625 3.18125 0 3.25 0H4.125C4.19375 0 4.25 0.05625 4.25 0.125V1.125H8.25V0.125C8.25 0.05625 8.30625 0 8.375 0H9.25C9.31875 0 9.375 0.05625 9.375 0.125V1.125ZM1.125 11.375H11.375V5.4375H1.125V11.375Z" fill="#061178"/>
    </svg>
);
const CalendarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CalendarSvg} {...props} />
  );

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
        getItem('Календарь', '1', <CalendarIcon />),
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
                            icon: <IconFont type="icon-tuichu" rotate={180} />,
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
