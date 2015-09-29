"use strict";

import React, {Component} from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute, Redirect} from 'react-router';

var routes = (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')}/>
    <NotFoundRoute handler={require('./components/NotFoundPage')}/>
  </Route>
);

export default routes;
