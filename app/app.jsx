var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var firebase = require("firebase");

var TodoApp = require('TodoApp');

// Load Foundation
$(document).foundation();

require('style!css!sass!appStyles');


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);