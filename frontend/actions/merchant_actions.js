import * as MERCHANT_UTILS from '../utils/api/merchant_utils';
import * as BUYER_ACTIONS from './buyer_actions'

export const addNewItem = (item) => dispatch => (
  MERCHANT_UTILS.postNewItem(item)
    .then((shop) => dispatch(BUYER_ACTIONS.receiveShopIndex(shop.data)))
    .catch((errors) => dispatch(receiveMerchantErrors(errors.response.data.errors)))
);

export const editItem = (item) => dispatch => (
  MERCHANT_UTILS.patchItem(item)
    .then((shop) => dispatch(BUYER_ACTIONS.receiveShopIndex(shop.data)))
    .catch((errors) => dispatch(receiveMerchantErrors(errors.response.data.errors)))
);

export const deleteItem = (item) => dispatch => (
  MERCHANT_UTILS.destroyItem(item)
    .then((shop) => dispatch(BUYER_ACTIONS.mergeDeletionFromShop(shop.data)))
);

export const getMerchantTransactions = () => dispatch => (
  MERCHANT_UTILS.fetchMerchantTransactions()
    .then((transactions) => dispatch(receiveMerchantTransactions(transactions.data)))
);

// Probably not needed
// export const editTransaction = (transaction) => dispatch => (
//   MERCHANT_UTILS.patchTransaction(transaction)
//     .then((transaction) => dispatch(receiveMerchantTransactions(transaction.data)))
//     .catch((errors) => dispatch(receiveMerchantErrors(errors.response.data.errors)))
// );

export const receiveMerchantTransactions = (transactions) => ({
  type: "RECEIVE_MERCHANT_TRANSACTIONS",
  transactions
});

export const receiveMerchantErrors = (errors) => ({
  type: "RECEIVE_MERCHANT_ERRORS",
  errors
});

export const clearMerchantErrors = () => ({
  type: "CLEAR_MERCHANT_ERRORS"
});

export const clearMerchantSession = () => ({
  type: "CLEAR_MERCHANT_SESSION"
})
