import Greeting from './greeting';
import { connect } from 'react-redux';
import * as SESSION_ACTIONS from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(SESSION_ACTIONS.logOut())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting)
