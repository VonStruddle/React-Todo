var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Clean the dishes'
        },
        {
          id: uuid.v4(),
          text: 'Do some sport'
        },
        {
          id: uuid.v4(),
          text: 'Learn React'
        }, 
        {
          id: uuid.v4(),
          text: 'Learn Redux'
        }, 
        {
          id: uuid.v4(),
          text: 'Use Firebase for secret project'
        }
      ]
    };
  },

  handleNewTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid.v4(),
          text: text
        }
      ]
    });
  },

  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleNewTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;