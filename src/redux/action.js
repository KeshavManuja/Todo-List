import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO, UPDATE_TODO } from "./actionType"


export const completeTodo = (payload) => ({
    type: COMPLETE_TODO,
    payload,
  });


  export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
  });

  export const removeTodo = (todo) => ({
    type: REMOVE_TODO,
    payload:todo, 
  });

  export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload:todo, 
  });