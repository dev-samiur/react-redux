import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchTodos, completeTodo, deleteTodo} from '../store/todo/actions'

export default function Todos() {

    const todos = useSelector(state => state.todos)
    const error = useSelector(state => state.error)
    const loading = useSelector(state => state.loading)
    
    const dispatch= useDispatch()

    useEffect(() => {
        dispatch( fetchTodos() )
    }, [])

    return (
        <div style={{padding: 50}}>

            { 
            
                todos ? todos.map( (todo, index) => (

                    <div key={index} style={{border: '1px solid #ccc'}}>
                        
                        <p>{todo.title}</p>
                        {
                            todo.completed ? <p>Completed: true</p> : 
                                <div>
                                    <p>Completed false</p>
                                    <button onClick={ () => dispatch( completeTodo(todo.id) ) }>Complete</button>
                                </div>
                        }
                        <button onClick={ () => dispatch( deleteTodo(todo.id) )}>Delete</button>
                    </div>
                )) : null 
            }

            {
                error ? <div>{error}</div> : null
            }

            {
                loading ? <div>Loading...</div> : null
            }

        </div>
    )
}
