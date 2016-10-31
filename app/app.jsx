var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state:', store.getState());
});

// Load Foundation
$(document).foundation();

require('style!css!sass!appStyles');


ReactDOM.render(
  <Provider store={store}>
  	<TodoApp/>
  </Provider>,
  document.getElementById('app')
);