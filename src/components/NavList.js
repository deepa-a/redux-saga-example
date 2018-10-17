import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavList extends React.Component {
  render() {
    const { navList } = this.props;
    return (
      <React.Fragment>
        <ul className="card-list">
          {navList.home.map((item, idx) => {
            const card = (
              <li className="card" key={item.path}>
                <Link to={item.path} className="pulsing-load">
                  {item.label}
                </Link>
              </li>
            );
            return card;
          })}
        </ul>
        <ul className="card-list">
          {navList.subscriber.map((item, idx) => {
            const card = (
              <li className="card" key={item.path}>
                <Link to={item.path} className="pulsing-load">
                  {item.label}
                </Link>
              </li>
            );
            return card;
          })}
        </ul>
        <ul className="card-list">
          {navList.funds.map((item, idx) => {
            const card = (
              <li className="card" key={item.path}>
                <Link to={item.path} className="pulsing-load">
                  {item.label}
                </Link>
              </li>
            );
            return card;
          })}
        </ul>
        <ul className="card-list">
          {navList.others.map((item, idx) => {
            const card = (
              <li className="card" key={item.path}>
                <Link to={item.path} className="pulsing-load">
                  {item.label}
                </Link>
              </li>
            );
            return card;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

NavList.propTypes = {
  navList: PropTypes.object.isRequired,
};

export default NavList;
