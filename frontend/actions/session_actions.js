import * as SESSION_UTILS from '../utils/api/session_utils';
import * as MERCHANT_ACTIONS from './merchant_actions';

export const signUp = (merchant) => dispatch => (
  SESSION_UTILS.signUp(merchant)
    .then((merchant) => dispatch(receiveCurrentUser(merchant.data)))
    .catch((errors) => dispatch(receiveSessionErrors(errors.response.data.errors)))
);

export const logIn = (merchant) => dispatch => (
  SESSION_UTILS.logIn(merchant)
    .then((merchant) => {
      dispatch(receiveCurrentUser(merchant.data));
      dispatch(MERCHANT_ACTIONS.getMerchantTransactions());
    })
    .catch((errors) => dispatch(receiveSessionErrors(errors.response.data.errors)))
);

export const logOut = () => dispatch => (
  SESSION_UTILS.logOut()
    .then(() => {
      dispatch(receiveCurrentUser(null));
      dispatch(MERCHANT_ACTIONS.clearMerchantSession());
    })
);

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
