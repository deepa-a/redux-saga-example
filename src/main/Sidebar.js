import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, Drawer } from '@material-ui/core';
import sidebarStyle from 'assets/jss/main/sidebarStyle';
import { getNavList } from 'route/RouteUtil';
import NavList from 'components/NavList';
import { hasRight } from 'utils/auth';

class Sidebar extends React.Component {

  getNavList(){
      if(this.props.rights){
          //tODO hasRight('right from the route list schema', this.props.rights)
      }
  }

  render() {
    const { classes } = this.props;
    const navList = getNavList();

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
            {this.getNavList()}
          <NavList navList={navList} />
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    rights: state.auth.rights,
});

export default withStyles(sidebarStyle)(connect(mapStateToProps)(Sidebar));
