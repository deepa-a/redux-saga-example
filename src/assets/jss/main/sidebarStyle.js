const sidebarStyle = theme => ({
  drawerPaper: {
    marginTop: '50px',
    borderRight: '1px solid grey',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    zIndex: theme.zIndex.drawer,
    width: theme.drawerWidth,
  },
});

export default sidebarStyle;
