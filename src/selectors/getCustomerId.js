export const getCustomerId = state => (state.subscriber.billingDetails ? state.subscriber.billingDetails.customerId : null);
