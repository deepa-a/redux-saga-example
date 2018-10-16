import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import mainStyle from 'assets/jss/main/mainStyle';
import { getSwitchRoute } from 'route/RouteUtil';

class Main extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainPanel}>
        <div className={classes.content}>
          { getSwitchRoute() }
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(mainStyle)(Main);
