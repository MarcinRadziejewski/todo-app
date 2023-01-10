import { useState } from 'react'
import './Task.css'

function Task() {

  return (
    <div className="task">
      <TaskHeader />
      <TaskDescription/>
      <TaskBottom />
    </div>
  );
}

function TaskHeader() {
  return (
    <div className="task-header">
      <h1>The first task title</h1>
      <button className="edit-task-button">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </button>  
    </div>    
  );
}

function TaskDescription() {
  return (
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua.</p>
  );
}

function TaskBottom() {
    return (
      <div className="task-bottom">
        <div className="task-categories"></div>
        <div class="done-toggle">
          <input type="checkbox" id="fuckface"/>
          <label htmlFor="">Done</label>
        </div>
      </div>
    )
}

export default Task;