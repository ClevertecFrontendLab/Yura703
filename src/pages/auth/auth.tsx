import 'antd/dist/antd.css';
import './auth.scss';

import logo from '@public/logo.svg';
import { AuthForm } from '@components/auth-form';

export const Auth: React.FC = () => {
    return (
        <div className="auth-window">
            <div className="auth">
                <div className="auth-form">
                    <div className="auth-form__logo">
                        <img src={logo} alt="CleverFit" className='sider-logo__fit' />
                    </div>
                    <AuthForm></AuthForm>
                </div>
            </div>
        </div>
    );
};
