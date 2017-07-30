import React from 'react';

const makeDollars = (num) => (
  ("$" + (parseFloat(Math.round(parseInt(num) * 100) / 100).toFixed(2)).toString())
)

const TransactionIndexItem = (props) => {
  if(props.transaction.errors){
    return (
      <div className="transaction">
        <div className="transaction-error">Could not buy {props.transaction.item_amount} {props.transaction.item_name}</div>
        {props.transaction.errors.map((error, idx) => (
          <div className="transaction-error-message" key={`transaction-error-${idx}`}>{error}</div>
        ))}
      </div>
    );
  } else {
    let transaction = props.transaction;
    return (
      <div className="transaction">
        <div className="transaction-info">ID: {transaction.id}</div>
        <div className="transaction-info">Contact E-mail: {transaction.email}</div>
        <div className="transaction-info">Item Name: {transaction.item_name}</div>
        <div className="transaction-info">Unit Price: {makeDollars(transaction.unit_price)}</div>
        <div className="transaction-info">Amount: {transaction.item_amount}</div>
        <div className="transaction-info">Total Price: {makeDollars(transaction.total)}</div>
      </div>
    )
  }
}

export default TransactionIndexItem;
