import { useState } from "react";
// import "./TodoInput.css"
import "./TodoInput.css"


export const TodoInput = ({createTodo}) => {
    const [task,setTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        createTodo(task)
        setTask("")
    }
    return (
        <div>
            <form className="TodoInput" onSubmit={handleSubmit}>
            <input  type="text" placeholder="Enter work" 
            id="task" name="task" value={task}
            onChange={(e)=>setTask(e.target.value)}/>

            <button>Add </button>
            </form> 
        </div>
    )
}