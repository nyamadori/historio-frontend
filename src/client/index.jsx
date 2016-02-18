import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import routes from '../routes';

render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));
