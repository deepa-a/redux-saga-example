import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SubscriberDetails extends React.Component {
  render() {
    const { subscriberDetails, billingAccountDetails, customerDetails } = this.props;

    return (
      <div>
        <h1>Subscriber Details</h1>
        <p>{subscriberDetails ? subscriberDetails.msisdn : null}</p>
        <p>{billingAccountDetails ? billingAccountDetails.baid : null}</p>
        <p>{customerDetails ? customerDetails.customerId : null}</p>
      </div>
    );
  }
}

SubscriberDetails.propTypes = {
  subscriberDetails: PropTypes.object.isRequired,
  billingAccountDetails: PropTypes.object,
  customerDetails: PropTypes.object,
};

const mapStateToProps = state => ({
  subscriberDetails: state.subscriber.details,
  billingAccountDetails: state.billingAccount.details,
  customerDetails: state.customer.details,
});

export default connect(mapStateToProps, null)(SubscriberDetails);
