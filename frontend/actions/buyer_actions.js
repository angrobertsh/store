import * as BUYER_UTILS from '../utils/api/buyer_utils';

export const getShopIndex = () => dispatch => (
  BUYER_UTILS.fetchShopIndex()
    .then((shops) => dispatch(receiveShopIndex(shops.data)))
)

export const getShopItems = (merchantId) => dispatch => (
  BUYER_UTILS.fetchShopItems(merchantId)
    .then((shop) => dispatch(receiveShopIndex(shop.data)))
)

export const sendTransactions = (transactions) => dispatch => (
  BUYER_UTILS.sendTransactions(transactions)
    .then((items) => dispatch(receiveBuyerTransactions(transactions.data)))
)

export const mergeDeletionFromShop = (shop) => ({
  type: "MERGE_DELETION_FROM_SHOP",
  shop
});

export const receiveShopIndex = (shops) => ({
  type: "RECEIVE_SHOP_INDEX",
  shops: shops,
})

export const addItemToCart = (transaction) => ({
  type: "ADD_ITEM_TO_CART",
  transaction: transaction
})

export const removeItemFromCart = (transaction) => ({
  type: "REMOVE_ITEM_FROM_CART",
  transaction: transaction
})

export const receiveBuyerTransactions = (transactions) => ({
  type: "RECEIVE_BUYER_TRANSACTIONS",
  transactions: transactions,
})
