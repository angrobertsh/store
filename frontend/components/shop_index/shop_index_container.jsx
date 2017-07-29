import ShopIndex from './shop_index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  shops: state.buyer.shops
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopIndex)
