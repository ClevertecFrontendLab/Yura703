import './auth-form.scss';
import 'antd/dist/antd.css';
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useState } from 'react';
import { GooglePlusOutlined } from '@ant-design/icons';

const options = [
    { label: 'Вход', value: 'input' },
    { label: 'Регистрация', value: 'registration' },
];

ConfigProvider.config({ theme: { primaryColor: '#2f54eb' } });

export const AuthForm: React.FC = () => {
    const [value, setValue] = useState('input');

    const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
      console.log('radio3 checked', value);
      setValue(value);
    };


    const onFinish = (values: unknown) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
    };


    return (
        <ConfigProvider >
            <div className='form'>
                <Radio.Group
                    options={options}
                    onChange={onChange3}
                    value={value}
                    optionType="button"
                    defaultValue={'input'}
                    size='large'
                    style={{width: '100%', paddingBottom: '24px'}}
                />

                <Form
                    color='red'
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="email"
                        style={{width: '100%', marginBottom: '32px'}}
                        rules={[{ required: true, message: 'Please input your e-mail!' }]}
                    >
                        <Input addonBefore='e-mail:' size='large'/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        style={{marginBottom: '54px'}}
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input.Password placeholder='Пароль' size='large'/>
                    </Form.Item>

                    <Form.Item style={{height: '24px'}}>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">Забыли пароль?</a>
                    </Form.Item>

                    <Form.Item style={{marginBottom: '16px'}}>
                        <Button type="primary" htmlType="submit" size='large' style={{width: '100%'}}>
                        Войти
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button type="default" size='large' style={{width: '100%'}}>
                            <GooglePlusOutlined/>
                            Войти через Google
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </ConfigProvider>
    );
};
