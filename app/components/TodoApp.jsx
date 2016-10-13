var React = require('react');

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
          id: 1,
          text: 'Clean the dishes'
        },
        {
          id: 2,
          text: 'Do some sport'
        },
        {
          id: 3,
          text: 'Learn React'
        }, 
        {
          id: 4,
          text: 'Learn Redux'
        }, 
        {
          id: 5,
          text: 'Use Firebase for secret project'
        }
      ]
    };
  },

  handleNewTodo: function(text) {
    alert('New todo: ' + text);
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