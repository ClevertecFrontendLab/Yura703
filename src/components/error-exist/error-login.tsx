import React from 'react'
import "./error-login.scss";
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { WarningFilled } from '@ant-design/icons';
//import { InfoMessage } from '@types/components-types';
interface InfoMessage  {
    icon: React.JSX.Element,
    title: string,
    message: string,
    buttonContent: string,
}

export const ErrorLogin = ({ props }: { props: InfoMessage }) => {

    return (
        <div className='error-login'>
            {props.icon}
            <h1 style={{ marginTop: '33px' }}>{props.title}</h1>
            <p style={{ marginBottom: '24px' }}>{props.message}</p>
            <Button type='primary' size='large' style={{ width: '100%' }}>{props.buttonContent}</Button>
        </div>
    );
};
