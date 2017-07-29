import React from 'react';
import { Link } from 'react-router-dom';
import TransactionIndexItem from './transaction_index_item';

const TransactionIndex = (props) => {
  return (
    <div id="transaction-index">
      {props.transactions.map((transaction, idx) => (
        <TransactionIndexItem transaction={transaction} key={`transaction-${idx}`} />
      ))}
    </div>
  )
}

export default TransactionIndex;
