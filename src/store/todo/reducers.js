import { FETCH_TODOS_REQUEST, FETCH_TODOS_FAILURE, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './types'
import { produce } from 'immer'

const initTodos= {
    todos: [],
    loading: false,
    error: ''
}

const todosReducer= (state= initTodos, action) => {

    return produce( state, draft => {

        switch(action.type) {

            case FETCH_TODOS_REQUEST:
                draft.loading = action.payload
                break 
                
            case FETCH_TODOS_FAILURE:
                draft.error = action.payload
                break

            case ADD_TODO:
                draft.todos = action.payload
                break

            case COMPLETE_TODO:{
                const index = draft.todos.findIndex( todo => todo.id === action.payload )
                draft.todos[index].completed = true
                break
            }
            case DELETE_TODO:{
                draft.todos= draft.todos.filter( todo => todo.id !== action.payload )
                break
            }
            default:
                break
                          
        }

    })
    
}

export default todosReducer