import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

import Master from './Master';
import Home from './Home';
import SubPageA from './SubPageA'

const AppRoutes = (
  <Route path='/' component={Master}>
    <IndexRoute component={Home} />
    <Route path='/a' component={SubPageA} />
  </Route>
);

export default AppRoutes;
