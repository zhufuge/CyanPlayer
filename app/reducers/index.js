import { combineReducers } from 'redux';

const username = (state='登录', action) => {
  switch (action.type) {
  case 'SIGNIN':
    return action.username;
  default:
    return state;
  }
};

export default combineReducers({
  username
});
