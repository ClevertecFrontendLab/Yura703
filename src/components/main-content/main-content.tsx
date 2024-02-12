import React from 'react';
import './main-content.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Card, Col, Row, Button } from 'antd';
import Icon, { IdcardOutlined, HeartFilled } from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CalendarSvg = () => (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.375 1.125H12C12.2766 1.125 12.5 1.34844 12.5 1.625V12C12.5 12.2766 12.2766 12.5 12 12.5H0.5C0.223437 12.5 0 12.2766 0 12V1.625C0 1.34844 0.223437 1.125 0.5 1.125H3.125V0.125C3.125 0.05625 3.18125 0 3.25 0H4.125C4.19375 0 4.25 0.05625 4.25 0.125V1.125H8.25V0.125C8.25 0.05625 8.30625 0 8.375 0H9.25C9.31875 0 9.375 0.05625 9.375 0.125V1.125ZM1.125 11.375H11.375V5.4375H1.125V11.375Z" fill="#061178"/>
    </svg>
);
const CalendarIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={CalendarSvg} {...props} />
  );


export const MainContent: React.FC = () => {

    return (
        <div className='main-content'>
            <Card bordered={false} className='main-text1'>
                <p>С CleverFit ты сможешь:</p>
                <p>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</p>
                <p>— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;</p>
                <p>— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</p>
                <p>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</p>
            </Card>
            <Card bordered={false} className='main-text2'>
                <p>CleverFit — это не просто приложение, а твой личный помощник<br/>в мире фитнеса. Не откладывай на завтра — начни тренироваться<br/>уже сегодня!</p>
            </Card>
            <Row gutter={64}>
                <Col span={8}>
                    <Card title="Расписать тренировки" bordered={false} style={{ width: 240 }} className='cards-btn'>
                        <Button type='text' icon={<HeartFilled />}>Тренировки</Button>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Назначить календарь" bordered={false} style={{ width: 240 }} className='cards-btn'>
                        <Button type='text' icon={<CalendarIcon/>}>Календарь</Button>
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
