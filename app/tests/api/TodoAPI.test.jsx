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
});