import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import MerchantReducer from './merchant_reducer';
import BuyerReducer from './buyer_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  merchant: MerchantReducer,
  buyer: BuyerReducer
});

export default RootReducer
