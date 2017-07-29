import Cart from './cart';
import { connect } from 'react-redux';
import * as BUYER_ACTIONS from '../../actions/buyer_actions';

const mapStateToProps = (state) => ({
  cart: state.buyer.cart
});

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(BUYER_ACTIONS.removeItemFromCart(item)),
  sendTransactions: (transactions) => dispatch(BUYER_ACTIONS.sendTransactions(transactions)),
  emptyCart: () => dispatch(BUYER_ACTIONS.emptyCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
