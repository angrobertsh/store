import React from 'react';
import { Link } from 'react-router-dom';
import TransactionIndexItem from './transaction_index_item';

const makeDollars = (num) => (
  ("$" + (parseFloat(Math.round(parseInt(num) * 100) / 100).toFixed(2)).toString())
)

const TransactionIndex = (props) => {
  return (
    <div id="transaction-index">
      {props.transactions.map((transaction, idx) => (
        <TransactionIndexItem transaction={transaction} key={`transaction-${idx}`} />
      ))}
      Total: {props.transactions.map((transaction) => transaction.total ? makeDollars(transaction.total) : 0).reduce((a, b) => (a + b), 0)}
    </div>
  )
}

export default TransactionIndex;
