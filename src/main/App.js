import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

class App extends React.Component{
    render(){
        return (
            <MuiThemeProvider theme={theme}>
                <h1>I am an app and i am here!</h1>
            </MuiThemeProvider>
        );
    }
}

export default App;
