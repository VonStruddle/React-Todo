const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!appStyles');

let Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);