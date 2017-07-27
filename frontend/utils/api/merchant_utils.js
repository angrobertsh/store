import request from './request';

// item is just going to be {name: "cat", price: 100, etc.} 

export const postNewItem = (item) => (
  request().post(`api/items`, item)
);

export const patchItem = (item) => (
  request().patch(`api/items/${item.id}`, item)
);

export const destroyItem = (itemId) => (
  request().delete(`api/items/${itemId}`)
);

export const fetchMerchantTransactions = () => (
  request().get(`api/transactions`)
);

export const patchTransaction = (transaction) => (
  request().patch(`api/transactions/${transaction.id}`, transaction)
);
