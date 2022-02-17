import "./Todo.css";
import {  CSSTransition, TransitionGroup } from "react-transition-group"
import { useState } from "react";

export const Todo = ({toogleTodo,task,completed,id,removeTodo, updateTodo}) => {

    const [isEditing,setIsediting]=useState(false);
    const [editTask,setEdittask]=useState(task)

    const handleUpdate =(e) => {
        e.preventDefault()
      
        updateTodo(id,editTask)
        setIsediting(false)
    }

    return(
        <TransitionGroup className={completed? "Todo completed":"Todo"}>
            {isEditing ? (
                <CSSTransition key="editing" timeout={500} classNames="form">
                          <form className="Todo-edit-form" onSubmit={handleUpdate}>
                            <input  type="text" 

                            value={editTask}
                            
                            onChange={(e)=>setEdittask(e.target.value)}/>

            <button>Save </button>
            </form> 
                </CSSTransition>

            ):(

            <CSSTransition key="normal" timeout={600} classNames="task-text">
                <li className="Todo-task" onClick={toogleTodo}>
                    {task}
                </li>

            </CSSTransition>
            )}
            <div className="Todo-buttons">

            <button onClick={()=>setIsediting(true)}>
                    <i className="fas fa-pen"></i>
                </button>

                <button onClick={removeTodo}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </TransitionGroup>
    )
}