import { TodoInput } from "./TodoInput"

import {CSSTransition, TransitionGroup} from "react-transition-group"
// import { completeTodo } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "./Todo";
import { completeTodo,addTodo ,removeTodo,updateTodo} from "../redux/action";
import "./TodoList.css"


export const TodoList= () => {
    const state = useSelector((state)=>({...state.todos}))
    let dispatch = useDispatch();  
    
    const create = (newTodo) => {
        dispatch(addTodo(newTodo))
    }

    const update = (id, updatedTask)=> {
        dispatch(updateTodo({id,updatedTask}))
    }
    return(
        <div className="TodoList">
            <h2>Todo App</h2>
            <TodoInput createTodo={create}/>
            <ul>
                <TransitionGroup className="todo=list">
                    {state.todos && state.todos.map((todo) => {
                        return (
                            <CSSTransition key={todo.id} classNames="todo">
                                <Todo
                                key={todo.id}
                                id={todo.id}
                                task={todo.task}
                                completed={todo.completed}
                                toggleTodo={()=> dispatch(completeTodo(todo))}
                                removeTodo={()=>dispatch(removeTodo(todo))}
                                updateTodo={update}/>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ul>
        </div>
    )
}