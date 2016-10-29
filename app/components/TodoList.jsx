var React = require('react');
var {connect} = require('react-redux');

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

module.exports = connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);