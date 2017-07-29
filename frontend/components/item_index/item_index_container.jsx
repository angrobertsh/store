import ItemIndex from './item_index';
import { connect } from 'react-redux';
import * as BUYER_ACTIONS from '../../actions/buyer_actions';

const mapStateToProps = (state, ownProps) => ({
  shop: state.buyer.shops[ownProps.match.params.merchantId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (transaction) => (dispatch(BUYER_ACTIONS.addItemToCart(transaction)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemIndex)
