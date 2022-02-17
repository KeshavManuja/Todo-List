import * as types from "./actionType.js"
import {v4 } from "uuid"

const init={
    todos:[{id:1,task:"Here",completed:false}]
}

export const reducer = (state=init,action) => {
    switch (action.type) {
        case types.COMPLETE_TODO:
            const toggleTodos =state.todos.map((el)=> (
                (el.id ===action.payload.id)? {...action.payload,completed:!action.payload.completed}:el
            ))
            return {...state,todos:toggleTodos}
            
        case types.ADD_TODO:
            const newTodo={
                id:v4(),
                task:action.payload,
                completed:false
            }
            const addedTodos = [...state.todos,newTodo]
            return {...state,todos:addedTodos} 

        case types.REMOVE_TODO:
            const filterTodo = state.todos.filter((el)=> el.id!==action.payload.id);
            return{...state,todos:filterTodo}

        case types.UPDATE_TODO:
            const updatedTodos = state.todos.map((el)=> {
                if(el.id===action.payload.id) {
                    return {...el,task:action.payload.updatedTask}
                }
                return el
            });

            return {...state,todos:updatedTodos,}
        default:
            return state
    }
}
