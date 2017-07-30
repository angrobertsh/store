import React from 'react';
import {Elements} from 'react-stripe-elements';

import CartContainer from './cart_container';

class CartWrapper extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Elements>
        <CartContainer />
      </Elements>
    )
  }
}

export default CartWrapper;
