import React from 'react';
import './main-content.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Card, Col, Row, Button } from 'antd';
import { HeartOutlined, IdcardOutlined } from '@ant-design/icons';

export const MainContent: React.FC = () => {

    return (
        <div className='main-content'>
            <Card bordered={false} style={{ width: 752 }}>
                <p> С CleverFit ты сможешь:</p>
                <p>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</p>
                <p>— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;</p>
                <p>— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</p>
                <p>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</p>
            </Card>
            <Card bordered={false} className='main-text'>
                <p>CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!</p>
            </Card>
            <Row gutter={64}>
                <Col span={8}>
                    <Card title="Расписать тренировки" bordered={false} style={{ width: 240 }} className='cards-btn'>
                        <Button type='text' icon={<HeartOutlined />}>Тренировки</Button>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Назначить календарь" bordered={false} style={{ width: 240 }} className='cards-btn'>
                        <Button type='text' icon={<HeartOutlined/>}>Календарь</Button>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Заполнить профиль" bordered={false} style={{ width: 240 }} className='cards-btn'>
                        <Button type='text' icon={<IdcardOutlined />}>Профиль</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
