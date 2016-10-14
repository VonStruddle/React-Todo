var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var uuid = require('node-uuid');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist;
  });

  it('should add todo in the todos state on handleNewTodo', () => {
    var todoText = 'Manger des frites';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleNewTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos.length).toBe(1);
  });

  it('should update completed value when handleToggle called', () => {
    var id = uuid.v4();
    var todoData = {
      id: id,
      text: 'Hug girlfriend',
      completed: false
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);

    todoApp.handleToggle(id);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});