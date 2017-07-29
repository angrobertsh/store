import React from 'react';
import TransactionIndex from '../transaction_index/transaction_index';

const MerchantShow = (props) => {
  return (
    <div id="merchant-page">
      <div id="merchant-title">
        {props.currentUser.store_name}
      </div>
      <div id="transaction-index">
        <TransactionIndex transactions={props.transactions} />
      </div>
    </div>
  )
}

export default MerchantShow;
