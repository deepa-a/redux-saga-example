import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';
import appStyle from 'assets/jss/main/appStyle';
import theme from './theme';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.wrapper}>
          <Header />
          <Sidebar />
          <Main />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(appStyle)(App);
