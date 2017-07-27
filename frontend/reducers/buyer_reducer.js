import merge from 'lodash/merge';

const defaultState = {
  shops: {},
  transactions: {}
};

const BuyerReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch(action.type){
    case "RECEIVE_SHOP_INDEX":
      newState = merge(newState, {shops: action.shops})
      return newState;
    case "RECEIVE_BUYER_TRANSACTIONS":
      newState = merge(newState, {transactions: action.transactions})
      return newState
    default:
      return newState;
  }
}


export default BuyerReducer;
