import React from 'react';

const TransactionIndexItem = (props) => {
  if(typeof props.transaction === "string"){
    return (<div className="transaction transaction-error">{transaction}</div>)
  } else {
    return (
      <div className="transaction">
        <div className="transaction-info">ID: {transaction.id}</div>
        <div className="transaction-info">Contact E-mail: {transaction.email}</div>
        <div className="transaction-info">Item Name: {transaction.item_name}</div>
        <div className="transaction-info">Unit Price: {transaction.unit_price}</div>
        <div className="transaction-info">Amount: {transaction.item_amount}</div>
        <div className="transaction-info">Total Price: {transaction.total}</div>
        <div className="transaction-info">Success? {transaction.success}</div>
      </div>
    )
  }
}

export default TransactionIndexItem;
