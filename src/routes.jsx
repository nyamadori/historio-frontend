'use strict';

import App from './app';
import Home from './home';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Home
    }
  }
];

export default routes;
