import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Drawer } from '@material-ui/core';
import sidebarStyle from 'assets/jss/main/sidebarStyle';
// import mainRoutes from 'route/RouteList';
import { getNavList } from 'route/RouteUtil';
import NavList from 'components/NavList';

class Sidebar extends React.Component {
  render() {
    const { classes } = this.props;
    const navList = getNavList();
    // debugger;
    return (
      <div>
        <Drawer
          variant="permanent"
          anchor="left"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <NavList navList={navList} />
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(sidebarStyle)(Sidebar);
