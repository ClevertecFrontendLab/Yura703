import './recovery-account.scss';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import { useState } from 'react';
import { ExclamationCircleFilled, GooglePlusOutlined } from '@ant-design/icons';

export const RecoveryAccount: React.FC = () => {
    const [email, setEmail] = useState('victorbyden@gmail.com');

    return (
        <div className='recovery-account'>
             <h1 style={{ marginTop: '33px' }}>Восстановление аккауанта</h1>

            <Form>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='Новый пароль' />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password placeholder='Повторите пароль'/>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
