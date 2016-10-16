var expect = require('expect');
var uuid = require('node-uuid');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [
        {
          id: uuid.v4(),
          text: 'Wash the dog',
          completed: false
        }, 
        {
          id: uuid.v4(),
          text: 'Feed the cat',
          completed: true
        }
      ];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {text: 'Malicious todo is evil'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array if localStorage\'s data invalid', () => {
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid data in localStorage', () => {
      var todos = [
        {
          id: uuid.v4(),
          text: 'Wash the dog',
          completed: false
        }, 
        {
          id: uuid.v4(),
          text: 'Feed the cat',
          completed: true
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: uuid.v4(),
        text: 'Wash the dog',
        completed: true
      }, 
      {
        id: uuid.v4(),
        text: 'Feed the cat',
        completed: false
      },
      {
        id: uuid.v4(),
        text: 'Feed the rabbit',
        completed: true
      }
    ];

    it('should return all todos if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only uncompleted todos if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort todos by completion status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'feed');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});