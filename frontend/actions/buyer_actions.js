import * as BUYER_UTILS from './utils/action_utils/buyer_utils';

export const getShopIndex = () => {

}


export const getShopItems = (merchantId) => {

}


export const sendTransactions = (transactions) => {

}

export const receiveShopIndex = (shops) => ({
  type: "RECEIVE_SHOP_INDEX",
  shops: shops,
})

export const receiveShopItems = (items) => ({
  type: "RECEIVE_SHOP_ITEMS",
  items: items,
})

export const receiveBuyerTransactions = (transactions) => ({
  type: "RECEIVE_BUYER_TRANSACTIONS",
  transactions: transactions,
})
