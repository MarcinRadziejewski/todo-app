import { useState } from 'react'
import './App.css'
import Task from './Task'

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app">
      <Header setModalOpen={setModalOpen} modalOpen={modalOpen}/>
      <div>
        <TaskFilter />
        <TasksContainer />
      </div>
    </div>
  )
}

function Header({setModalOpen}) {

  return (
    <header>
      <p className="logo">todo</p>
      <button className="add-task-button" onClick={() => {setModalOpen(true);}}>
        <div className="vertical line"></div>
        <div className="horizontal line"></div>
      </button>
    </header>
  )
}

function TaskFilter() {
  return (
    <div className="task-filter">
      <button className="filter-button">
        <div className="color p"></div> <p>work</p>
      </button>
      <button className="filter-button">
        <div className="color b"></div> <p>study</p>
      </button>
      <button className="filter-button">
        <div className="color r"></div> <p>entertainment</p>
      </button>
      <button className="filter-button">
        <div className="color g"></div> <p>family</p>
      </button>
      <div class="done-tasks-toggle">
        <input type="checkbox" id="done-tasks" />
        <label htmlFor="">Hide Done Tasks</label>
      </div>
    </div>
  )
}

function TasksContainer() {
  return (
    <div className="tasks">
      <Task />
    </div>
  )
}


export default App
