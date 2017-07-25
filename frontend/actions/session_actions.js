import * as SESSION_UTILS from './utils/action_utils/session_utils';

export const signup = (merchant) => {

};

export const login = (merchant) => {

};

export const logout = () => {

};

export const receiveCurrentUser = (user) => ({
    type: "RECEIVE_CURRENT_USER",
    user: user,
});

export const receiveSessionErrors = (errors) => ({
    type: "RECEIVE_SESSION_ERRORS",
    errors: errors,
});

export const clearSessionErrors = () => ({
  type: "CLEAR_SESSION_ERRORS"
})
