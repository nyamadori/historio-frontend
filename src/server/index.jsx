'use strict'

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../routes';

export default {
  routes: routes,
  render: (renderProps) => {
    return renderToString(<RouterContext {...renderProps} />);
  }
};
