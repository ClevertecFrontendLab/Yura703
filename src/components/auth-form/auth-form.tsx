import './auth-form.scss';
import 'antd/dist/antd.css';
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';
import { Button, Checkbox, Form, Input, Radio } from 'antd';
import { useEffect, useState } from 'react';
import { GooglePlusOutlined } from '@ant-design/icons';
import useForm from 'antd/lib/form/hooks/useForm';
import authRequest, { user } from '@utils/request/auth';

import { history } from '@redux/configure-store';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { showLoader } from '@redux/slice/authSlice';
import { validateEmailRegExp, validatePasswordRegExp } from '@utils/validate';


const registrationUser = authRequest.registrationUser;
const authenticationUser = authRequest.authenticationUser;

ConfigProvider.config({ theme: { primaryColor: '#2f54eb' } });

export const AuthForm: React.FC = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [isRegistration, setIsRegistration] = useState(false);
    const [form] = useForm();

    const dispatch = useAppDispatch();
    console.log('state=', useAppSelector((state) => state.auth.isLoader));
    dispatch(showLoader());
    console.log('state=', useAppSelector((state) => state.auth.isLoader));


    const values = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
        () => {
            setIsDisabled(false);
        },
        () => {
            setIsDisabled(true);
        },
        );
    }, [values, form]);

    const onChangeRegistration = () => {
      setIsRegistration(!isRegistration);
    };

    const onFinish =  async (values: user) => {
        const { email, password } = values;

        if (isRegistration) {
            const code = await registrationUser({ email, password });
            switch (code) {
                case 201:
                    history.push('/result/success');
                    break;
                case 409:
                    history.push('/result/error-user-exist');
                    break;
                default:
                    history.push('/result/error');
                    break;
            }
            console.log(code);
            console.log(history);

            //export { useAppDispatch, useAppSelector } from './typed-react-redux-hooks';

        } else await authenticationUser({ email, password });
    };

    return (
        <ConfigProvider >
            <div className='form'>
                <Radio.Group
                    options={[
                        { label: 'Вход', value: 'input' },
                        { label: 'Регистрация', value: 'registration' },
                    ]}
                    onChange={onChangeRegistration}
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
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        name="email"
                        style={{width: '100%', marginBottom: '32px'}}
                        rules={[
                            { required: true, message: '' },
                            { pattern: validateEmailRegExp, message: '' }
                        ]}
                    >
                        <Input addonBefore='e-mail:' size='large'/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        style={{marginBottom: '54px'}}
                        rules={[
                            { required: true, message: '' },
                            { pattern: validatePasswordRegExp, message: "Пароль не менее 8 символов, с заглавной буквой и цифрой" }
                        ]}
                        help={ isRegistration ? "Пароль не менее 8 символов, с заглавной буквой и цифрой" : undefined }

                    >
                        <Input.Password placeholder='Пароль' size='large'/>
                    </Form.Item>

                    { isRegistration
                        ?   <Form.Item
                                style={{ marginBottom: '62px', marginTop: '-35px' }}
                                name="confirm"
                                dependencies={['password']}
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
                                    return Promise.reject(new Error('Пароли не совпадают'));
                                    },
                                }),
                                ]}
                            >
                                <Input.Password placeholder='Повторите пароль' size='large'/>
                            </Form.Item>

                        : <Form.Item style={{height: '24px'}}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Запомнить меня</Checkbox>
                                </Form.Item>
                                <a className="login-form-forgot" href="">Забыли пароль?</a>
                            </Form.Item>
                    }

                    <Form.Item style={{marginBottom: '16px'}}>
                        <Button
                            type="primary" htmlType="submit" size='large'
                            style={{width: '100%'}}
                            disabled={isDisabled}
                        >
                                Войти
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button type="default" size='large' style={{width: '100%'}}>
                            <GooglePlusOutlined/>
                            { isRegistration ? 'Регистрация через Google' : 'Войти через Google' }
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </ConfigProvider>
    );
};
