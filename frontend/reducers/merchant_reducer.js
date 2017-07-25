import merge from 'lodash/merge';

const defaultState = {
  transactions: {},
  errors: {}
};

const MerchantReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch(action.type){
    case "RECEIVE_MERCHANT_TRANSACTIONS":
      newState = merge(newState, {transactions: action.transactions})
      return newState;
    case "RECEIVE_ERRORS":
      newState = merge(newState, {errors: action.errors})
      return newState;
    default:
      return newState;
  }
}


export default MerchantReducer;
