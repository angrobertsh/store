import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import ShopIndexContainer from './shop_index/shop_index_container';
import ItemIndexContainer from './item_index/item_index_container';
import CartContainer from './cart/cart_container';
import ItemFormContainer from './item_form/item_form_container';
import MerchantShowContainer from './merchant_show/merchant_show_container';
import TransactionIndexContainer from './transaction_index/transaction_index_container';
import { StopIfAlreadyLoggedInRoute, EnsureYourStoreRoute, RootFetchRoute, ItemsFetchRoute, CleanUpBuyerTransactionsRoute } from '../utils/router/router_utils';


const App = () => (
  <div>
    <header>
      <div id="top-bar">
        <Link to="/">
          <h1>The Online Store</h1>
        </Link>
        <CartContainer />
        <GreetingContainer />
      </div>
    </header>
    <Switch>
      <RootFetchRoute exact path="/" component={ShopIndexContainer} />
      <EnsureYourStoreRoute path="/merchant/:merchantId/items/:itemId" component={ItemFormContainer} />
      <EnsureYourStoreRoute path="/merchant/:merchantId/items/new" component={ItemFormContainer} />
      <EnsureYourStoreRoute path="/merchant/:merchantId/myStore" component={MerchantShowContainer} />
      <ItemsFetchRoute path="/merchant/:merchantId" component={ItemIndexContainer} />
      <CleanUpBuyerTransactionsRoute path="/checkout" component={TransactionIndexContainer} />
      <StopIfAlreadyLoggedInRoute path="/login" component={SessionFormContainer} />
      <StopIfAlreadyLoggedInRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
