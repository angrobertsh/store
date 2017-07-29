import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component{
  constructor(){
    super(props);
    this.state = {
      email: ""
    }
    this.checkout = this.checkout.bind(this);
    this.update = this.update.bind(this);
  }

  update(e){
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  checkout(e){
    e.preventDefault();
    if(this.state.email === ""){
      alert("Please enter an e-mail to checkout")
    } else {
      // this.props.sendTransactions(this.props.cart)
    }
  }

  render(){
    const keys = Object.keys(this.props.cart);
    return (
      <div id="cart-item-index">
        {keys.map((key) => (
          <CartItem item={this.props.cart[key]} key={`cart-item-${key}`} removeItemFromCart={this.props.removeItemFromCart} />
        ))}
        <div id="cart-footer">
          <form id="checkout-form" onSubmit={this.checkout}>
            <input type="text" name="email" value={this.state.email} placeholder="E-mail" onChange={this.update} />
            <input type="submit" id="checkout-button" value="Checkout" className="button" />
          </form>
        </div>
      </div>
    )
  }
}

export default Cart;
