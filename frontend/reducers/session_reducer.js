import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {

  let newState = merge({}, state);

  switch (action.type){
    case "RECEIVE_CURRENT_USER":
      newState = merge(defaultState, {currentUser: action.user});
      return newState;
    case "RECEIVE_SESSION_ERRORS":
      newState = merge(newState, {errors: action.errors});
      return newState;
    case "CLEAR_SESSION_ERRORS":
      newState = merge(newState, {errors: null}, {errors: []});
      return newState;
    default:
      return newState;
  }
}


export default SessionReducer;
