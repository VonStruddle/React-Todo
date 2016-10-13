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
          text: 'Clean the dishes',
          completed: true
        },
        {
          id: uuid.v4(),
          text: 'Do some sport',
          completed: true
        },
        {
          id: uuid.v4(),
          text: 'Learn React',
          completed: false
        }, 
        {
          id: uuid.v4(),
          text: 'Learn Redux',
          completed: false
        }, 
        {
          id: uuid.v4(),
          text: 'Use Firebase for secret project',
          completed: false
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
          text: text,
          completed: false
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

  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },

  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleNewTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;