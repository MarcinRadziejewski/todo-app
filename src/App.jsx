import { useState } from 'react'
import './App.css'
import Task from './Task'
import AddTaskModal from './AddTaskModal'


function App() {
  const [modalOpen, setModalOpen] = useState({
    mode: null,
    title: null,
    description: null,
  });

  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const [selectedTags, setSelectedTags] = useState({
    work: false,
    study: false,
    entertainment: false,
    family: false
  })


  //I'm using the Set data structure here, so that I don't have to worry about duplicates
  const [selectedFiltersSet, setSelectedFiltersSet] = useState(new Set());

  const handleSelectedFilters = (event) => {
    const targetTextContent = event.currentTarget.textContent;
    if (selectedFiltersSet.has(targetTextContent)) {
      selectedFiltersSet.delete(targetTextContent);
    } 
    else selectedFiltersSet.add(targetTextContent);

    setSelectedFiltersSet(new Set(selectedFiltersSet));
    event.currentTarget.classList.toggle("selected")
  };
  
  const [list, setList] = useState([]);
  const [input, setInput] = useState(["", ""]);

  const toggleSelectedTaskId = (id) => {
    setSelectedTaskId(prevId => prevId === id ? null : id)
  }

  const handleDeletion = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  const handleEditing = (index) => {
    setModalOpen({
      mode: "edit",
      index: index,
      title: list[index].title,
      description: list[index].description,
    });
  }

  //handleFiltering has to be called at the end of handleSelectedFilters
  const handleFiltering = () => {
    const newList = list.filter((task) => {
      let containsAllItems = false;
      if (Array.from(selectedFiltersSet).length === 0) {
        containsAllItems = true;
        return containsAllItems;
      }
      Array.from(selectedFiltersSet).forEach(filter => {
        if (task.filters.includes(filter)){
          containsAllItems = true
        }
      })
      return containsAllItems;
    })
    /*const newList = list.map((task) => {
      let containsAllItems = true;
      Array.from(selectedFiltersSet).forEach(filter => {
        if(task.filters.includes(filter) == false)
          containsAllItems = false;}
        )
      if(containsAllItems === true)
        return task
      else


    })*/
    console.log(newList)
    setList(newList)
  }

  const addTodo = (title, description) => {
    const newTodo = {
      title: title,
      description: description,
      filters: Object.entries(selectedTags).filter(([key, value]) => value === true)
      .map(([key]) => key),
      done: false
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput(input => {
      input[0] = "";
      input[1] = "";
      return input;
    });

    setSelectedTags(false)
    console.log(newTodo.filters)
  };

  return (
    <div className="app">
      <Header setModalOpen={setModalOpen}/>
      <div>
        <TaskFilter 
        handleSelectedFilters={handleSelectedFilters}
        selectedFiltersSet={selectedFiltersSet}
        />
        <TasksContainer list={list}
        selectedTaskId={selectedTaskId}
        setSelectedTaskId={setSelectedTaskId}
        toggleSelectedTaskId={toggleSelectedTaskId}
        handleDeletion={handleDeletion}
        handleEditing={handleEditing}
        />
      </div>
      <AddTaskModal
      modalOpen={modalOpen}
      onClose={() => setModalOpen({mode: null})}
      addTodo={addTodo}
      selectedTags={selectedTags}
      setSelectedTags={setSelectedTags}
      input={input}
      list={list}
      setList={setList}
      />
      <button onClick={() => handleFiltering()}>fuck</button>
    </div>
  )
}

function Header({setModalOpen}) {

  return (
    <header>
      <p className="logo">todo</p>
      <button className="add-task-button" onClick={() => setModalOpen({mode: "add"})}>
        <div className="vertical line"></div>
        <div className="horizontal line"></div>
      </button>
    </header>
  )
}

function TaskFilter( {handleSelectedFilters} ) {
  return (
    <div className="task-filter">
      <button className="filter-button" onClick={(event) => handleSelectedFilters(event)}>
        <div className="color p"></div>work
      </button>
      <button className="filter-button" onClick={(event) => handleSelectedFilters(event)}>
        <div className="color b"></div>study
      </button>
      <button className="filter-button" onClick={(event) => handleSelectedFilters(event)}>
        <div className="color r"></div>entertainment
      </button>
      <button className="filter-button" onClick={(event) => handleSelectedFilters(event)}>
        <div className="color g"></div>family
      </button>
      <div className="done-tasks-toggle">
        <input type="checkbox" id="done-tasks" />
        <label htmlFor="">Hide Done Tasks</label>
      </div>
    </div>
  )
}

function TasksContainer( {list, selectedTaskId, toggleSelectedTaskId, handleDeletion, handleEditing} ) {
  const tasks = list.map((task, index) => (
    <Task key={index}
     id={index}
     task={task}
     selectedTaskId={selectedTaskId}
     toggleSelectedTaskId={toggleSelectedTaskId}
     handleDeletion={handleDeletion}
     handleEditing={handleEditing}
     />
  ))
  
  return (
    <div className="tasks">
      {tasks}
    </div>
  )
}


export default App
