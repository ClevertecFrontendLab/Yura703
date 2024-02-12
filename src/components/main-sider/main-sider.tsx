import { useState } from 'react';
import './main-sider.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Layout, Menu, Space } from 'antd';
const { Sider } = Layout;
import Icon, {
    HeartFilled ,
    IdcardOutlined,
    TrophyFilled,
    createFromIconfontCN,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';
import { JSX } from 'react/jsx-runtime';
import logoFit from '@public/fit.svg';
import logoClever from '@public/clever.svg';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const CalendarSvg = () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.375 1.125H12C12.2766 1.125 12.5 1.34844 12.5 1.625V12C12.5 12.2766 12.2766 12.5 12 12.5H0.5C0.223437 12.5 0 12.2766 0 12V1.625C0 1.34844 0.223437 1.125 0.5 1.125H3.125V0.125C3.125 0.05625 3.18125 0 3.25 0H4.125C4.19375 0 4.25 0.05625 4.25 0.125V1.125H8.25V0.125C8.25 0.05625 8.30625 0 8.375 0H9.25C9.31875 0 9.375 0.05625 9.375 0.125V1.125ZM1.125 11.375H11.375V5.4375H1.125V11.375Z" fill="#061178"/>
    </svg>
);
const CalendarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CalendarSvg} {...props} />
  );

export const MainSider: React.FC = () => {
    const [width, _setWidth] = useState(window.innerWidth);
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
        <div className='main-sider'>
            <Sider
            theme='light'
            className='sider'
            width={width>800 ?  208 : 106}
            collapsible={false}
            collapsedWidth={width>800 ?  64 : 0}
            collapsed={collapsed}
            >
            <div className="sider-logo">
                { collapsed
                ?  <img src={logoFit} alt="fit" className='sider-logo__short' />
                : <>
                    <img src={logoClever} alt="clever" className='sider-logo__clever' />
                    <img src={logoFit} alt="fit" className='sider-logo__fit' />
                </>}
            </div>
            <div className="sider-menu">
                <Space size={100} direction='vertical' align='center' >
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        inlineIndent={240}
                        theme='light'
                        items={items}
                        style={ collapsed ? { width: "64px" } : width>800 ? { width: "208px" } : { width: "106px" }}
                    />
                </Space>
                <Space size={100} direction='vertical' align='center' >
                <Menu
                    className='sider-exit'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    inlineIndent={240}
                    theme='light'
                    style={ collapsed ? { width: "64px" } : width>800 ? { width: "208px" } : { width: "106px" }}
                    items={[ {
                        key: '10',
                        icon: <IconFont type="icon-tuichu" rotate={180} />,
                        label: 'Выход',
                    },]}
                />
                </Space>
            </div>
        </Sider>
        <Button
        style={{padding: 0, border: 0}}
        type="default"
        onClick={toggleCollapsed}
        className='sider-btn'
        >
            <div className="sider-btn-icon">
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
        </Button>
    </div>
    );
};
