import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';
import appStyle from 'assets/jss/main/appStyle';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'actions/authActions';
import theme from './theme';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    if (props.rights.length === 0) {
      props.actions.getUserRoles();
    }
  }

  render() {
    const { classes, rights } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        {rights.length
          ? (
            <div className={classes.wrapper}>
              <Header />
              <Sidebar />
              <Main />
              <Footer />
            </div>
          ) : <h1>User roles loading...</h1>}
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  rights: state.auth.rights,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(authActions, dispatch),
});

export default withRouter(withStyles(appStyle)(connect(mapStateToProps, mapDispatchToProps)(App)));
