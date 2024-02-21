export const validateEmailRegExp = new RegExp(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/);

export const validatePasswordRegExp = new RegExp(/(?=.*[0-9])(?=.*[A-Z]).{8,}/g);
