import React from 'react';
import CartItem from './cart_item';
import { withRouter } from 'react-router-dom';
import { injectStripe, CardElement } from 'react-stripe-elements';

class Cart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: ""
    }
    this.checkout = this.checkout.bind(this);
    this.update = this.update.bind(this);
    this.composeTransactions = this.composeTransactions.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  update(e){
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }

  checkout(e){
    e.preventDefault();
    if(this.state.email === ""){
      alert("Please enter an e-mail to checkout")
    } else {
      this.props.stripe.createToken().then((result) => {
        let transactions = this.composeTransactions(result.token.id);
        this.props.sendTransactions(transactions);
        this.props.emptyCart();
        this.props.history.push('/checkout');
      })

    }
  }

  composeTransactions(stripeToken){
    const keys = Object.keys(this.props.cart);
    const email = this.state.email;
    let item;
    let transactions = {};
    keys.forEach((key) => {
      item = this.props.cart[key];
      transactions[key] = {email: email, item_amount: item.item_amount, item_id: item.item_id, stripe_token: stripeToken}
    });
    return transactions;
  }

  toggleVisibility(){
    this.cart.classList.toggle("none");
  }

  render(){
    const keys = Object.keys(this.props.cart);
    return (
      <div id="cart-container" className="flex column align-flex-end">
        <label onClick={this.toggleVisibility} id="cart-label"> </label>
        <div id="cart-item-index" className="none" ref={cart => this.cart = cart}>
          {keys.map((key) => (
            <CartItem item={this.props.cart[key]} key={`cart-item-${key}`} removeItemFromCart={this.props.removeItemFromCart} />
          ))}
          <div id="cart-footer">
            <form id="checkout-form" className="flex column" onSubmit={this.checkout}>
              <input type="text" name="email" value={this.state.email} placeholder="E-mail" onChange={this.update} />
              <label>
                Card details
                  <CardElement />
              </label>
              <input type="submit" id="checkout-button" value="Checkout" className="button" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default injectStripe(withRouter(Cart));
