import * as MERCHANT_UTILS from './utils/action_utils/merchant_utils';

export const addNewItem = (item) => {

};

export const editItem = (item) => {

};

export const deleteItem = (itemId) => {

};

export const getMerchantTransactions = () => {

};

export const editTransaction = (transaction) => {

};

export const receiveMerchantTransactions = (transactions) => ({
  type: "RECEIVE_MERCHANT_TRANSACTIONS",
  transactions
});

export const receiveMerchantErrors = (errors) => ({
  type: "RECEIVE_MERCHANT_ERRORS",
  errors
});
