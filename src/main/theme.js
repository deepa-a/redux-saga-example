import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  drawerWidth: 160,
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      light: '#6d6d6d',
      main: '#6d6d6d',
      dark: '#00363a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#000000',
      main: '#ff9800',
      dark: '#c66900',
      contrastText: '#000',
    },
    error: {
      light: '#e53935',
      main: '#ef5350',
      dark: '#ef5350',
    },
    text: {
      primary: '#999999',
    },
  },
  typography: {
    fontFamily: '',
    fontSize: 14,
  },
  shape: {
    borderRadius: 4,
  },
  spacing: {
    unit: 16,
  },
  zIndex: {
    appBar: 12,
    drawer: 11,
    snackbar: 15,
  },
});
