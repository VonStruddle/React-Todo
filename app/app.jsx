var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var firebase = require("firebase");

var TodoApp = require('TodoApp');

// Firebase Init
var config = {
  apiKey: "AIzaSyBkheE3yM43PCygvp_taCd-5ge0gOTYCyU",
  authDomain: "awesome-react-todo.firebaseapp.com",
  databaseURL: "https://awesome-react-todo.firebaseio.com/",
  storageBucket: "gs://awesome-react-todo.appspot.com",
};
firebase.initializeApp(config);

// Load Foundation
$(document).foundation();

require('style!css!sass!appStyles');


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);