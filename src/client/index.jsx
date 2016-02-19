import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import routes from '../routes';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
