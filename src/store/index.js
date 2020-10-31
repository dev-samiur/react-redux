import { createStore, applyMiddleware }  from 'redux';
import todosReducers from './todo/reducers';
import thunk from 'redux-thunk'

const store= createStore(todosReducers, applyMiddleware(thunk))

export default store