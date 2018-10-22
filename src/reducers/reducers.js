import { combineReducers } from 'redux';
import subscriber from './subscriberReducer';
import billingAccount from './billingAccountReducer';
import customer from './customerReducer';
import auth from './authReducer';

export default combineReducers({
  subscriber,
  billingAccount,
  customer,
  auth,
});
