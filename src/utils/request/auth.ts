import { AUTH_URL, BASE_URL } from "@constants/path";
import { ConfirmPassw, User } from "../../types";
import axios, { AxiosError } from "axios";
// -H 'accept: application/json' \
// -H 'Content-Type: application/json' \

const getGoogleAuth = async () => {
    try {
        const response = await axios.get(BASE_URL + AUTH_URL.get);
        //const accessToken = response.accessToken;

        return response.data
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
};

const authenticationUser = async (user: User) => {
    try {
      const response = await axios.post(BASE_URL + AUTH_URL.post_login, user);
      console.log(response.data);

      return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

const registrationUser = async (user: User) => {
    try {
      const response = await axios.post(BASE_URL + AUTH_URL.post_registration, user);

      return response.status;
    } catch (error) {
        return (error as AxiosError).response?.status;
    }
}

const checkEmail = async (email: string) => {
    try {
      const response = await axios.post(BASE_URL + AUTH_URL.post_check_email, email)
      return response.data
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

const confirmEmail = async (passwordData: Omit<ConfirmPassw, 'confirmPassword'>) => {
    try {
      const response = await axios.post(BASE_URL + AUTH_URL.post_confirm_email, passwordData)
      return response.data
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}

const changePassword = async (passwordData: Omit<ConfirmPassw, 'code'>) => {
    try {
      const response = await axios.post(BASE_URL + AUTH_URL.post_change_password, passwordData)
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
