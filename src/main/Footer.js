import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import footerStyle from 'assets/jss/main/footerStyle';

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
     I am footer.
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(footerStyle)(Footer);
