export const getSubscriberBaid = (state) => {
  state.subscriber.subscriberDetails ? state.subscriber.subscriberDetails.baid : null;
};
