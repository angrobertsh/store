import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
  return(
    <div className="cart-item">
      <div className="cart-item-amount">{props.item.item_amount}</div>
      <div className="cart-item-name">{props.item.name}</div>
      <div onClick={(e) => (props.removeItemFromCart(props.item))}>Remove Item From Cart</div>
    </div>
  )
}

export default CartItem;
