const headerStyle = theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    boxShadow: 'none',
    borderBottom: '0',
    marginBottom: '0',
    position: 'absolute',
    width: '100%',
    paddingTop: '10px',
    zIndex: theme.zIndex.appBar,
    color: theme.palette.text.primary,
    border: '0',
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
    minHeight: '50px',
    display: 'block',
  },
});

export default headerStyle;
