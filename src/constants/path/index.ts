export const BASE_URL = 'https://marathon-api.clevertec.ru';

export const PATH = {
    MAIN: '/main',
    AUTH: '/auth',
    REGISTRATION: '/auth/registration',//TODO 'registration'
    CONFIRM_EMAIL: '/auth/confirm-email',
    CHANGE_PASSWORD: '/auth/change-password',

    RESULT: '/result',
    SUCCESS: '/result/success',
    SUCCESS_PASSWORD: '/result/success-change-password',
    ERROR: '/result/error',
    ERROR_USER_EXIST: '/result/error-user-exist',
    ERROR_EMAIL_NO_EXIST: '/result/error-check-email-no-exist',
    ERROR_EMAIL_CHECK: '/result/error-check-email',
    ERROR_PASSWORD: '/result/error-change-password',
    ERROR_LOGIN: '/result/error-login',
}

export enum AUTH_URL {
    get = '/auth/google',
    post_login = '/auth/login',
    post_registration = '/auth/registration',
    post_check_email = '/auth/check-email',
    post_confirm_email = '/auth/confirm-email',
    post_change_password = '/auth/change-password',
}
