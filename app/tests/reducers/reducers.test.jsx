var expect = require('expect');
var df = require('deep-freeze-strict');
var uuid = require('node-uuid');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'python'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toBe('python');
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'learn Haskell one day'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toBe('learn Haskell one day');
    });

    it('should toggle completion on todo', () => {
      var id = uuid.v4();

      var todos = [{
        id: id,
        text: 'Learn SQL another day',
        completed: false,
        createdAt: moment().unix(),
        completedAt: undefined
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: id
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toNotBe(undefined);
    });
  });
});