import { CheckCircleFilled, CloseCircleFilled, WarningFilled } from "@ant-design/icons"
import { InfoMessage } from "../types";

export const LOGIN_FAILED: InfoMessage = {
    icon: <WarningFilled style={{ fontSize: '5em', color: '#d89614' }} />,
    title: 'Вход не выполнен',
    message: 'Что-то пошло не так. Попробуйте еще раз',
    buttonContent: 'Повторить',
}

export const EMAIL_ALREADY_EXIST: InfoMessage = {
    icon: <CloseCircleFilled style={{ fontSize: '5em', color: '#ff4d4f' }} />,
    title: 'Данные не сохранились',
    message: 'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.',
    buttonContent: 'Назад к регистрации',
}

export const DATA_NOT_SAVED: InfoMessage = {
    icon: <CloseCircleFilled style={{ fontSize: '5em', color: '#ff4d4f' }} />,
    title: 'Данные не сохранились',
    message: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.',
    buttonContent: 'Повторить',
}

export const REGISTARATION_SUCCESSFUL: InfoMessage = {
    icon: <CheckCircleFilled style={{ fontSize: '5em', color: '#52c41a' }} />,
    title: 'Регистрация успешна',
    message: 'Регистрация прошла успешно. Зайдите' + '\n' + 'в приложение, используя свой e-mail и пароль.',
    buttonContent: 'Войти',
}

export const EMAIL_IS_NOT_REGISTERED: InfoMessage = {
    icon: <CloseCircleFilled style={{ fontSize: '5em', color: '#ff4d4f' }} />,
    title: 'Такой e-mail не зарегистрирован',
    message: 'Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.',
    buttonContent: 'Попробовать снова',
}
