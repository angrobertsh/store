import React from 'react';
import TransactionIndex from '../transaction_index/transaction_index';

const MerchantShow = (props) => (
  <div id="merchant-page">
    <div id="merchant-title">
      <h2>Recent Transactions for {props.currentUser.store_name}</h2>
    </div>
    <div id="transaction-index">
      <TransactionIndex transactions={props.transactions} />
    </div>
  </div>
)

export default MerchantShow;
