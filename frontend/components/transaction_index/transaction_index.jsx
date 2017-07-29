import React from 'react';
import { Link } from 'react-router-dom';
import TransactionIndexItem from './transaction_index_item';

const TransactionIndex = (props) => {
  return (
    <div id="transaction-index">
      {props.transactions.map((transaction, idx) => (
        <TransactionIndexItem transaction={transaction} key={`transaction-${idx}`} />
      ))}
      Total: {props.transactions.map((transaction) => transaction.total ? parseInt(transaction.total) : 0).reduce((a, b) => (a + b), 0)}
    </div>
  )
}

export default TransactionIndex;
