import React from 'react';
import CartItem from './cart_item';
import { withRouter } from 'react-router-dom';

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: ""
    }
    this.checkout = this.checkout.bind(this);
    this.update = this.update.bind(this);
    this.composeTransactions = this.composeTransactions.bind(this);
  }

  update(e){
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  checkout(e){
    e.preventDefault();
    if(this.state.email === ""){
      alert("Please enter an e-mail to checkout")
    } else {
      let transactions = this.composeTransactions();
      this.props.sendTransactions(transactions);
      this.props.history.push('/checkout');
      this.props.emptyCart();
    }
  }

  composeTransactions(){
    const keys = Object.keys(this.props.cart);
    const email = this.state.email;
    let item;
    let transactions = {};
    keys.forEach((key) => {
      item = this.props.cart[key];
      transactions[key] = {email: email, item_amount: item.item_amount, item_id: item.item_id}
    });
    return transactions;
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

export default withRouter(Cart);
