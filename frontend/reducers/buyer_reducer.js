import merge from 'lodash/merge';

const defaultState = {
  shops: {},
  cart: {},
  transactions: []
};

const BuyerReducer = (state = defaultState, action) => {

  let newState = merge({}, state);
  let cart = newState.cart;

  switch(action.type){
    case "RECEIVE_SHOP_INDEX":
      newState = merge(newState, {shops: action.shops});
      return newState;
    case "MERGE_DELETION_FROM_SHOP":
      newState.shops[Object.keys(action.shop)] = action.shop[Object.keys(action.shop)];
      return newState;
    case "RECEIVE_BUYER_TRANSACTIONS":
      newState = merge(newState, {transactions: action.transactions})
      return newState;
    case "CLEAR_BUYER_TRANSACTIONS":
      newState = merge(newState, {transactions: null}, {transactions: []});
      return newState;
    case "ADD_ITEM_TO_CART":
      cart[action.transaction.item_id] = action.transaction;
      newState = merge(newState, {cart: cart});
      return newState;
    case "REMOVE_ITEM_FROM_CART":
      delete cart[action.transaction.item_id];
      newState = merge(newState, {cart: cart});
      return newState;
    case "EMPTY_CART":
      newState = merge(newState, {cart: null}, {cart: {}});
      return newState;
    default:
      return newState;
  }
}


export default BuyerReducer;
