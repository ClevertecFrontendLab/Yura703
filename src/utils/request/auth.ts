// import { IBoard, IErrorResponse } from 'types/Interfaces';
// import request from './request';
// import { URL } from '../../utils/constants';

import axios, { AxiosError } from "axios";

const BASE_URL = 'https://marathon-api.clevertec.ru';

enum auth_url {
    get = '/auth/google',
    post_login = '/auth/login',
    post_registration = '/auth/registration',
    post_check_email = '/auth/check-email',
    post_confirm_email = '/auth/confirm-email',
    post_change_password = '/auth/change-password',
}

type errorResponses = {
    "statusCode": number,
    "error": string,
    "message": string
}

export type user = {
    email: string,
    password: string,
}

type confirmPassw = {
    email: string,
    code: string,
    confirmPassword: string,
}

// -H 'accept: application/json' \
// -H 'Content-Type: application/json' \

const getGoogleAuth = async () => {
    try {
        const response = await axios.get(BASE_URL + auth_url.get);
        //const accessToken = response.accessToken;

        return response.data
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
};

const authenticationUser = async (user: user) => {
    try {
      const response = await axios.post(BASE_URL + auth_url.post_login, user);
      console.log(response.data);

      return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

const registrationUser = async (user: user) => {
    try {
      const response = await axios.post(BASE_URL + auth_url.post_registration, user);

      return response.status;
    } catch (error) {
        return (error as AxiosError).response?.status;
    }
}

const checkEmail = async (email: string) => {
    try {
      const response = await axios.post(BASE_URL + auth_url.post_check_email, email)
      return response.data
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

const confirmEmail = async (passwordData: Omit<confirmPassw, 'confirmPassword'>) => {
    try {
      const response = await axios.post(BASE_URL + auth_url.post_confirm_email, passwordData)
      return response.data
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

const changePassword = async (passwordData: Omit<confirmPassw, 'code'>) => {
    try {
      const response = await axios.post(BASE_URL + auth_url.post_change_password, passwordData)
      return response.data
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

export default {
    getGoogleAuth,
    authenticationUser,
    registrationUser,
    checkEmail,
    confirmEmail,
    changePassword,
};
