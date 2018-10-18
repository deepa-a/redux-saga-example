import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SubscriberDetails extends React.Component {
  render() {
    const { subscriberDetails } = this.props;

    return (
      <div>
        <h1>Subscriber Details</h1>
        <p>{subscriberDetails ? subscriberDetails.msisdn : null}</p>
      </div>
    );
  }
}

SubscriberDetails.propTypes = {
  subscriberDetails: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  subscriberDetails: state.subscriber.details,
});

export default connect(mapStateToProps, null)(SubscriberDetails);
