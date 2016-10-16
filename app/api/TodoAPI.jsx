var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (error) {
      console.log(error);
    }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by completion
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // filter by searched text
    filteredTodos = filteredTodos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchText);
    })

    // filter by order of completion
    // uncomplete task before completed ones
    filteredTodos.sort((a, b) => {
      if (a.completed && !b.completed) {
        return 1;
      } else if (!a.completed && b.completed) {
        return -1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}