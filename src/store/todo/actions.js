import { FETCH_TODOS_REQUEST, FETCH_TODOS_FAILURE, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './types'
import axios from 'axios'

export const fetchTodosRequest= loading => {
    return {
        type: FETCH_TODOS_REQUEST,
        payload: loading
    }
}

export const fetchTodosFailure= error => {
    return {
        type: FETCH_TODOS_FAILURE,
        payload: error
    }
}

export const addTodo= todos => {
    return {
        type: ADD_TODO,
        payload: todos
    }
}

export const completeTodo= todo_id => {
    return {
        type: COMPLETE_TODO,
        payload: todo_id
    }
}

export const deleteTodo= todo_id => {
    return {
        type: DELETE_TODO,
        payload: todo_id
    }
}

export const fetchTodos= () => {

    return (dispatch) => {

        dispatch(fetchTodosRequest(true))

        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then( response => {
            dispatch(addTodo(response.data))
            dispatch(fetchTodosRequest(false))
        })
        .catch( error => {
            dispatch(fetchTodosFailure(error))
        })
    }
}