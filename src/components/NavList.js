import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavList extends React.Component {
  render() {
    const { navList } = this.props;

    return (
      <React.Fragment>
        {Object.keys(navList).map(cat => (
          <ul key={cat}>
            {navList[cat].map(item => (
              <li key={item.path}>
                <Link to={item.path}>
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
  navList: PropTypes.object.isRequired,
};

export default NavList;
