import TransactionIndex from './transaction_index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  transactions: state.buyer.transactions
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionIndex)
