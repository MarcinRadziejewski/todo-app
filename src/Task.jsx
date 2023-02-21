import { useState } from 'react'
import './Task.css'

function Task( {task, id, selectedTaskId, toggleSelectedTaskId, handleDeletion, handleEditing} ){
 
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="task">
      <div className="task-header">
        {isDone === true ? (<h1 className="done">{task.title}</h1>) : (<h1>{task.title}</h1>)}
        <div className="edit-task-dropdown">
          <button className="task-meatballs-button" onClick={() => toggleSelectedTaskId(id)}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </button>
          {id === selectedTaskId ? (
          <div className="edit-task-dropdown-menu">
            <button className="edit-task-button" onClick={() => {handleEditing(id)}}>Edit...</button>
            <button className="delete-task-button" onClick={() => {handleDeletion(id)}}>Delete</button>
          </div>
          ) : null}
        </div>  
      </div>    

      <div className="task-description">
      {isDone === true ? (<p className="done">{task.description}</p>) : (<p>{task.description}</p>)}
      </div>

      <div className="task-bottom">
        <div className="task-categories">
          {task.filters.find(element => element === "work") === "work" ? (
            <div className="color p"></div>
          ): null}

          {task.filters.find(element => element === "study") === "study" ? (
            <div className="color b"></div>
          ): null}

          {task.filters.find(element => element === "entertainment") === "entertainment" ? (
            <div className="color r"></div>
          ): null}

          {task.filters.find(element => element === "family") === "family" ? (
            <div className="color g"></div>
          ): null}
        </div>
        <div className="done-toggle">
          <input type="checkbox" id="teapot" onChange={() => setIsDone(!isDone)}/>
          <label htmlFor="">Done</label>
      </div>
      </div>
    </div>
  );
}

export default Task;