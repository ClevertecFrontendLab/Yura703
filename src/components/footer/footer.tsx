import React from 'react';
import './footer.scss';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const Footer: React.FC = () => {

    return (
        <div className='footer'>
           <Button type='text' className='footer__btn'>Смотреть отзывы</Button>
           <Card bordered={false} className='footer__card'>
                <p className='footer__card-title'>Скачать на телефон</p>
                <p className='footer__card-text'>Доступно в PRO-тарифе</p>
                <div className='footer-card-fone'>
                    <Button type='text' icon={<AndroidFilled />}>Android OS</Button>
                    <Button type='text' icon={<AppleFilled />}>Apple iOS</Button>
                </div>
            </Card>
        </div>
    );
};
