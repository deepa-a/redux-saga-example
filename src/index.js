import 'assets/css/normalize.css';
import 'assets/css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'getStore';
import App from 'main/App';
import registerServiceWorker from 'registerServiceWorker';

const store = configureStore();

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('app'));

registerServiceWorker();
