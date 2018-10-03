import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
    withStyles,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Icon
} from '@material-ui/core';
import sidebarStyle from 'assets/jss/main/sidebarStyle';

class Sidebar extends React.Component{
    render(){
        const { classes } = this.props;
        return (
           <div>
               <Drawer
                   variant="permanent"
                   anchor="left"
                   open
                   classes={{
                    paper: classes.drawerPaper
                   }}>
                   Sidebar
               </Drawer>
           </div>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
