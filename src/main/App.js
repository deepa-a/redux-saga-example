import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';
import theme from 'main/theme';
import Header from 'main/Header';
import Sidebar from 'main/Sidebar';
import Main from 'main/Main';
import Footer from 'main/Footer';
import appStyle from 'assets/jss/main/appStyle';

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
