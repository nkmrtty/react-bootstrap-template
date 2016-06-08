import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, useRouterHistory, Route, hashHistory} from 'react-router';
import {createHashHistory} from 'history';

import AppRoutes from './AppRoutes'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/**1
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
 */

render(
  <Router
    history={useRouterHistory(createHashHistory)({ queryKey: false })}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    {AppRoutes}
  </Router>
  , document.getElementById('app'));
