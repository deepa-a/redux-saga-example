import React from 'react';
import PropTypes from 'prop-types';
import headerStyle from 'assets/jss/main/headerStyle';
import { AppBar, withStyles } from '@material-ui/core';

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.appBar}>
        Header
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(Header);
