import './recovery-code.scss';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import { useState } from 'react';
import { ExclamationCircleFilled, GooglePlusOutlined } from '@ant-design/icons';

export const RecoveryCode: React.FC = () => {
    const [email, setEmail] = useState('victorbyden@gmail.com');

    return (
        <div className='recovery'>
                <ExclamationCircleFilled style={{ fontSize: '5em', color: '#2f54eb' }} />
            <h1 style={{ marginTop: '33px' }}>Введите код для восстановления аккауанта</h1>
            <p style={{ marginBottom: '24px' }}>{`Мы отправили вам на e-mail ${email} шестизначный код. Введите его в поле ниже.`}</p>
            <div className="numbers">
                <Input className='input-number'></Input>
                <Input className='input-number'></Input>
                <Input className='input-number'></Input>
                <Input className='input-number'></Input>
                <Input className='input-number'></Input>
                <Input className='input-number'></Input>
            </div>
            <p style={{ marginBottom: '24px' }}>Не пришло письмо? Проверьте папку Спам.</p>
        </div>
    );
};
