import { combineReducers } from 'redux';
import subscriber from './subscriberReducer';
import subscription from './subscriptionReducer';
import billingAccount from './billingAccountReducer';
import customer from './customerReducer';
import auth from './authReducer';
import funds from './fundsReducer';

export default combineReducers({
  subscriber,
  subscription,
  billingAccount,
  customer,
  auth,
  funds,
});
