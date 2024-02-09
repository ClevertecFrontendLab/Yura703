import React from 'react';
import './footer.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Card, Button } from 'antd';
import { AndroidOutlined, AppleOutlined, HeartOutlined } from '@ant-design/icons';

export const Footer: React.FC = () => {

    return (
        <div className='footer'>
           <Button type='text' className='footer__btn'>Смотреть отзывы</Button>
           <Card bordered={false} className='footer__card'>
                <p>Скачать на телефон</p>
                <p>Доступно в PRO-тарифе</p>
                <div className='footer-card-fone'>
                    <Button type='text' icon={<AndroidOutlined />}>Android OS</Button>
                    <Button type='text' icon={<AppleOutlined />}>Apple iOS</Button>
                </div>
            </Card>
        </div>
    );
};
