const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const ReactRouter = require('react-router');
const express = require('express');
const ect = require('ect');
const app = express();
const appRouter = require('./lib').default;

app.engine('ect', ect({
  watch: true,
  root: __dirname + '/views',
  ext: '.ect'
}).render);
app.set('view engine', 'ect');

app.use((req, res, next) => {
  ReactRouter.match({routes: appRouter.routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.render('index', { renderedBody: appRouter.render(renderProps) });
    } else {
      next()
    }
  })
});

app.use(express.static('./public'));


app.listen(4000, () => {
  console.log('Application listening on port 4000')
});
