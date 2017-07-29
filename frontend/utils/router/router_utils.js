import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import * as BUYER_ACTIONS from '../../actions/buyer_actions';
import * as MERCHANT_ACTIONS from '../../actions/merchant_actions';

class RootFetch extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.getShopIndex();
  }

  render(){
    return (
      <Route path={this.props.path} render={(props) => (<this.props.component {...props} />)} />
    );
  }
}

class ItemsFetch extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.getShopItems(this.props.computedMatch.params.merchantId);
  }

  render(){
    return (
      <Route path={this.props.path} render={(props) => (<this.props.component {...props} />)} />
    );
  }
}

class EnsureYourStore extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.getShopItems(this.props.computedMatch.params.merchantId);
  }

  componentWillUnmount(){
    this.props.clearMerchantErrors();
  }

  render(){
    return (
      <Route path={this.props.path} render={(props) => (
        this.props.currentUser.id === parseInt(this.props.computedMatch.params.merchantId) ? (
        <this.props.component {...props} />
      ) : (
        <Redirect to="/" />
      )
      )} />
    );
  }
}

class CleanUpBuyerTransactions extends React.Component {
  constructor(props){
    super(props)
  }

  componentWillUnmount(){
    this.props.clearBuyerTransactions();
  }

  render(){
    return (
      <Route path={this.props.path} render={(props) => (<this.props.component {...props} />)} />
    );
  }
}

const StopIfAlreadyLoggedIn = ({ component: Component, path, currentUser }) => (
  <Route path={path} render={(props) => (
    currentUser ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )}/>
);

// const EnsureYourStore = ({ component: Component, path, currentUser }) => (
//   <Route path={path} render={(props) => (
//       currentUser.id === props.match.params.merchantId ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to="/" />
//     )
//   )} />
// );

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    getShopIndex: () => dispatch(BUYER_ACTIONS.getShopIndex()),
    getShopItems: (merchantId) => dispatch(BUYER_ACTIONS.getShopItems(merchantId)),
    clearBuyerTransactions: () => dispatch(BUYER_ACTIONS.clearBuyerTransactionsErrors()),
    clearMerchantErrors: () => dispatch(MERCHANT_ACTIONS.clearMerchantErrors()),
  });
};

export const StopIfAlreadyLoggedInRoute = withRouter(connect(mapStateToProps, null)(StopIfAlreadyLoggedIn));
export const CleanUpBuyerTransactionsRoute = withRouter(connect(null, mapDispatchToProps)(StopIfAlreadyLoggedIn));
export const EnsureYourStoreRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(EnsureYourStore));
export const RootFetchRoute = withRouter(connect(null, mapDispatchToProps)(RootFetch));
export const ItemsFetchRoute = withRouter(connect(null, mapDispatchToProps)(ItemsFetch));
