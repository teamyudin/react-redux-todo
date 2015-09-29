'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './routes';

import redux, { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/reducers';

import App from './components/app';

let store = createStore(todoApp);

React.render(
	<Provider store={store}>{() => <App />}</Provider>,
  document.getElementById('app')
);
