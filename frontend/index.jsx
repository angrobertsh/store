import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import request from './utils/api/request';
import * as BUYER_ACTIONS from './actions/buyer_actions';
import * as SESSION_ACTIONS from './actions/session_actions';
import * as MERCHANT_ACTIONS from './actions/merchant_actions';
import merge from 'lodash/merge';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser){
    const preloadedState = { session: {currentUser: currentUser, errors: []} };
    store = configureStore(preloadedState);
    delete window.currentUser
  } else {
    store = configureStore();
  }
  window.a = BUYER_ACTIONS;
  window.b = SESSION_ACTIONS;
  window.c = MERCHANT_ACTIONS;
  window.request = request;
  window.store = store;
  window.merge = merge;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
