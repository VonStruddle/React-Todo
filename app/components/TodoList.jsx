var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    var renderTodos = (todos) => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos(todos)}
      </div>
    );
  }
});

module.exports = TodoList;