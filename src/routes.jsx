'use strict';

import App from './app';
import Home from './home';
import ProjectIndex from './project-index';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Home
    },

    childRoutes: [
      { path: 'projects', component: ProjectIndex }
    ]
  }
];

export default routes;
