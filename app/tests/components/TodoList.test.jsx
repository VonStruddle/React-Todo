var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var moment = require('moment');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'lorem ipsum',
        completed: false,
        completedAt: null,
        createdAt: moment().unix()
      },
      {
        id: 2,
        text: 'lolilol',
        completed: false,
        completedAt: null,
        createdAt: moment().unix()
      },
      {
        id: 3,
        text: 'hello world',
        completed: false,
        completedAt: null,
        createdAt: moment().unix()
      }
    ];

    var store = configure({todos});
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render the empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container-message').length).toBe(1);
  });
});