var React = require('react');

var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos, onToggle} = this.props;

    var renderTodos = (todos) => {
      if (todos.length === 0) {
        return (
          <p className='container-message'>Nothing to do :( Go create a todo right now!</p>
        );
      }

      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={onToggle}/>
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