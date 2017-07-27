import * as MERCHANT_UTILS from '../utils/api/merchant_utils';
import * as BUYER_ACTIONS from './buyer_actions'

export const addNewItem = (item) => dispatch => (
  MERCHANT_UTILS.postNewItem(item)
    .then((shop) => dispatch(BUYER_ACTIONS.receiveShopIndex(shop.data)))
);

export const editItem = (item) => dispatch => (
  MERCHANT_UTILS.patchItem(item)
    .then((shop) => dispatch(BUYER_ACTIONS.receiveShopIndex(shop.data)))
);

export const deleteItem = (itemId) => dispatch => (
  MERCHANT_UTILS.destroyItem(itemId)
    .then((shop) => dispatch(BUYER_ACTIONS.receiveShopIndex(shop.data)))
);

export const getMerchantTransactions = () => dispatch => (
  MERCHANT_UTILS.fetchMerchantTransactions()
    .then((transactions) => dispatch(receiveMerchantTransactions(transactions.data)))
);

export const editTransaction = (transaction) => dispatch => (
  MERCHANT_UTILS.patchTransaction(transaction)
    .then((transaction) => dispatch(receiveMerchantTransactions(transaction.data)))
    .catch((errors) => dispatch(receiveMerchantErrors(errors.response.data.errors)))
);

export const receiveMerchantTransactions = (transactions) => ({
  type: "RECEIVE_MERCHANT_TRANSACTIONS",
  transactions
});

export const receiveMerchantErrors = (errors) => ({
  type: "RECEIVE_MERCHANT_ERRORS",
  errors
});
