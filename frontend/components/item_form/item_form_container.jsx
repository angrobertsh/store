import ItemForm from './item_form';
import { connect } from 'react-redux';
import * as MERCHANT_ACTIONS from '../../actions/merchant_actions';

const mapStateToProps = (state, ownProps) => {
  if(state.buyer.shops[ownProps.match.params.merchantId]){
    if(state.buyer.shops[ownProps.match.params.merchantId].items){
      if(ownProps.match.params.itemId === "new"){
        return ({
          itemsLength: state.buyer.shops[ownProps.match.params.merchantId].items.length,
          items: state.buyer.shops[ownProps.match.params.merchantId].items,
          item: null,
          errors: state.merchant.errors
        });
      }
      return ({
        itemsLength: state.buyer.shops[ownProps.match.params.merchantId].items.length,
        items: state.buyer.shops[ownProps.match.params.merchantId].items,
        item: state.buyer.shops[ownProps.match.params.merchantId].items.find((el) => el.id === parseInt(ownProps.match.params.itemId)),
        errors: state.merchant.errors
      });
    }
  } else {
    return ({
      itemsLength: 0,
      item: null,
      errors: state.merchant.errors
    });
  }
}

const mapDispatchToProps = (dispatch) => ({
  addNewItem: (item) => dispatch(MERCHANT_ACTIONS.addNewItem(item)),
  editItem: (item) => dispatch(MERCHANT_ACTIONS.editItem(item)),
  deleteItem: (itemId) => dispatch(MERCHANT_ACTIONS.deleteItem(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm)
