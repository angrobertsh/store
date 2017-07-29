import MerchantShow from './merchant_show';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  transactions: state.merchant.transactions,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantShow)
