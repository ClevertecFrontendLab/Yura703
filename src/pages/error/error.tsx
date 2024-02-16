import { ErrorLogin } from '@components/error-exist';
import './error.scss';
import 'antd/dist/antd.css';
//import { InfoMessage } from '@types/component-types';
import { CheckCircleFilled, CloseCircleFilled, WarningFilled } from '@ant-design/icons';

interface InfoMessage  {
    icon: React.JSX.Element,
    title: string,
    message: string,
    buttonContent: string,
}

const LOGIN_FAILED: InfoMessage = {
    icon: <WarningFilled style={{ fontSize: '5em', color: '#d89614' }} />,
    title: 'Вход не выполнен',
    message: 'Что-то пошло не так. Попробуйте еще раз',
    buttonContent: 'Повторить',
}

const EMAIL_ALREADY_EXIST: InfoMessage = {
    icon: <CloseCircleFilled style={{ fontSize: '5em', color: '#ff4d4f' }} />,
    title: 'Данные не сохранились',
    message: 'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.',
    buttonContent: 'Назад к регистрации',
}

const DATA_NOT_SAVED: InfoMessage = {
    icon: <CloseCircleFilled style={{ fontSize: '5em', color: '#ff4d4f' }} />,
    title: 'Данные не сохранились',
    message: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.',
    buttonContent: 'Повторить',
}

const REGISTARATION_SUCCESSFUL: InfoMessage = {
    icon: <CheckCircleFilled style={{ fontSize: '5em', color: '#52c41a' }} />,
    title: 'Регистрация успешна',
    message: 'Регистрация прошла успешно. Зайдите' + '\n' + 'в приложение, используя свой e-mail и пароль.',
    buttonContent: 'Войти',
}

const EMAIL_IS_NOT_REGISTERED: InfoMessage = {
    icon: <CloseCircleFilled style={{ fontSize: '5em', color: '#ff4d4f' }} />,
    title: 'Такой e-mail не зарегистрирован',
    message: 'Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.',
    buttonContent: 'Попробовать снова',
}

export const Error: React.FC = () => {
    return (
        <div className='error'>
            <div className="error__wrapper">
                <ErrorLogin props={EMAIL_IS_NOT_REGISTERED}></ErrorLogin>
            </div>
        </div>
    );
};
