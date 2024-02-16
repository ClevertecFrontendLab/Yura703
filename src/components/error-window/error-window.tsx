import { Button } from 'antd';
import './error-window.scss';
import 'antd/dist/antd.css';

import image from '@public/image.svg';

export const ErrorWindow: React.FC = () => {

    return (
        <div className='error-window'>
            <img src={image} alt="img" />
            <h1 style={{ marginTop: '24px' }}>Что-то пошло не так</h1>
            <p>Произошла ошибка, попробуйте отправить форму ещё раз.</p>
            <Button size='large' type='primary' style={{ marginTop: '10px' }}>Назад</Button>
        </div>
    );
};
