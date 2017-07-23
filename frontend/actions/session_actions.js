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

export const receiveErrors = (errors) => ({
    type: "RECEIVE_ERRORS",
    errors: errors,
});
