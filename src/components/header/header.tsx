import React, { useState } from 'react';
import './header.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Button, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

export const Header: React.FC = () => {

    return (
        <header className='header' >
            <Typography.Text>
                Главная
            </Typography.Text>
            <div className="header-content">
                <Typography.Title level={1}  style={{ fontWeight: 700 }}>
                    Приветствуем тебя в CleverFit — приложении,<br/> которое поможет тебе добиться своей мечты!
                </Typography.Title>
                <Button type='text' icon={<SettingOutlined />}>Настройки</Button>
            </div>
        </header>
    );
};
