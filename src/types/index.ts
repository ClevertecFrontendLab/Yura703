export interface InfoMessage {
    icon: React.JSX.Element,
    title: string,
    message: string,
    buttonContent: string,
}

export type ErrorResponses = {
    "statusCode": number,
    "error": string,
    "message": string
}

export type User = {
    email: string,
    password: string,
}

export type ConfirmPassw = {
    email: string,
    code: string,
    confirmPassword: string,
}

