import request from './request';

export const fetchShopIndex = () => (
  request().get(`api/merchants`)
);

export const fetchShopItems = (merchantId) => (
  request().get(`api/items`, {params: {merchant_id: merchantId}})
);

export const sendTransactions = (transactions) => (
  request().post(`api/transactions`, transactions)
);
