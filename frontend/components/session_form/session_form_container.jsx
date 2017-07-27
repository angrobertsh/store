import SessionForm from './session_form';
import { connect } from 'react-redux';
import * as SESSION_ACTIONS from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.session.errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => (dispatch(SESSION_ACTIONS.signUp(user))),
  logIn: (user) => (dispatch(SESSION_ACTIONS.logIn(user)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
