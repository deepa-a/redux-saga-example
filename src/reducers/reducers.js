import { combineReducers } from 'redux';
import subscriber from './subscriberReducer';
import auth from './authReducer';

export default combineReducers({
  subscriber,
  auth,
});
