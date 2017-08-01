import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { StripeProvider } from 'react-stripe-elements';


import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import ShopIndexContainer from './shop_index/shop_index_container';
import ItemIndexContainer from './item_index/item_index_container';
import CartWrapper from './cart/cart_wrapper';
import ItemFormContainer from './item_form/item_form_container';
import MerchantShowContainer from './merchant_show/merchant_show_container';
import TransactionIndexContainer from './transaction_index/transaction_index_container';
import { StopIfAlreadyLoggedInRoute, EnsureYourStoreRoute, RootFetchRoute, ItemsFetchRoute, CleanUpBuyerTransactionsRoute } from '../utils/router/router_utils';


const App = () => (
  <div>
    <header>
      <div id="top-bar">
        <GreetingContainer />
        <h1 id="title"><Link to="/">The Online Shoppymart</Link></h1>
        <StripeProvider apiKey={window.STRIPE_KEYS["public"]}>
          <CartWrapper />
        </StripeProvider>
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
