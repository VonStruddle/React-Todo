var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
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

  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;