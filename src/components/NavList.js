import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as subActions from 'actions/subscriberActions';

class NavList extends React.Component {
  render() {
    const { navList, actions } = this.props;

    return (
      <React.Fragment>
        {Object.keys(navList).map(submenu => (
          <ul key={submenu}>
            {navList[submenu].map(item => (
              <li key={item.path}>
                <Link to={item.path} onClick={submenu === 'others' ? () => actions.clearSubscriberInfo() : null}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </React.Fragment>
    );
  }
}

NavList.propTypes = {
  actions: PropTypes.object.isRequired,
  navList: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  subscriberDetails: state.subscriber.subscriberDetails,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(subActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavList);
