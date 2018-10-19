import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Drawer } from '@material-ui/core';
import sidebarStyle from 'assets/jss/main/sidebarStyle';
import { getNavList } from 'route/RouteUtil';
import NavList from 'components/NavList';
import { hasRight } from 'utils/auth';

class Sidebar extends React.Component {
  filterNavList(navList) {
    const { rights } = this.props;
    const navs = {};

    if (rights) {
      Object.keys(navList).map((p) => {
        navs[p] = navList[p].filter(route => hasRight(rights, route.right));
        return true;
      });
    }

    return navs;
  }

  render() {
    const { classes } = this.props;
    const navList = this.filterNavList(getNavList());

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
  rights: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  rights: state.auth.rights,
});

export default withStyles(sidebarStyle)(connect(mapStateToProps)(Sidebar));
