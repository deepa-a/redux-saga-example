import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as subscriberActions from 'actions/subscriberActions';

class Home extends React.Component {
  render() {
    const { actions, subscriberDetails } = this.props;
    if(subscriberDetails){
        return(
            <Redirect to='/subscriber-details'/>
        )
    }
    return (
      <div>
        <h1>Search subscriber</h1>
        <input type="text" name="Subscriber" />
        <button onClick={actions.getSubscriber}>Get Subscriber</button>

      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownprops) => {
    return{
        subscriberDetails: state.subscriber.details
    }
};


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(subscriberActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
