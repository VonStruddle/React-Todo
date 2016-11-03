import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'work on redux'
    };

    var res = actions.setSearchText('work on redux');

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 123,
        text: 'Eat some camembert',
        completed: false,
        createdAt: 0
      }
    };

    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO action', (done) => {
    const store = createMockStore({});
    const todoText = 'Walk the dog';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();

      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });

      done();
    }).catch(done);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: 1,
      text: 'ptdr',
      completed: false,
      completedAt: undefined,
      createdAt: 424242
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 42
    };

    var res = actions.toggleTodo(42);

    expect(res).toEqual(action);
  })
});