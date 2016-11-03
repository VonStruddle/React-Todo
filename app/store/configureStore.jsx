import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		searchText: searchTextReducer,
		showCompleted: showCompletedReducer,
		todos: todosReducer
	});

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
	var store = redux.createStore(
		reducer, 
		initialState, 
		composeEnhancers(
			redux.applyMiddleware(thunk)
		)
	);

	return store;
};