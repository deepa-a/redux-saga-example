import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as subscriberActions from 'actions/subscriberActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.redir = null;
  }

  shouldComponentUpdate(nextProps) {
    this.redir = nextProps.subscriberDetails ? <Redirect to="/subscriber-details" /> : null;
    return true;
  }

  render() {
    const { actions, error } = this.props;

    return (
      <div>
        {this.redir}
        {error && (<h3>Error: {error.response.data}</h3>)}
        <h1>Search subscriber</h1>
        <input type="text" name="Subscriber" />
        <button type="button" onClick={actions.getSubscriber}>Get Subscriber</button>
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  subscriberDetails: PropTypes.object,
  error: PropTypes.object,
};

const mapStateToProps = state => ({
  subscriberDetails: state.subscriber.subscriberDetails,
  error: state.subscriber.error,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(subscriberActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
