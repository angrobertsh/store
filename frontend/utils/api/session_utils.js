import request from './request';

export const logIn = (merchant) => (
  request().post(`api/session`, merchant)
);

export const logOut = () => (
  request().delete(`api/session`)
);

export const signUp = (merchant) => (
    request().post(`api/merchants`, {merchants: merchant})
);
