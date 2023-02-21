import "./AddTaskModal.css"
import { useState } from "react";

export default function AddTaskModal( {modalOpen, onClose, input, addTodo, selectedTags, setSelectedTags, editedButton} ) {



  if (!modalOpen) {
    return null
  }


  const handleSelectingTags = (e) => {
    //e.currentTarget ignores the children, e.target doesn't
    const targetText = e.currentTarget.textContent;
    setSelectedTags((prevState) => ({...prevState, [targetText]: !prevState[targetText]}))
    e.currentTarget.classList.toggle("selected")
  }

  return (
    <div className="add-task-modal" onClick={onClose}>
      <div className="add-task-modal-content" onClick={e => e.stopPropagation()}>

        <div className="add-task-modal-body">

            <div className="modal-header">
              <button className="cancel-button" onClick={onClose}>Cancel</button>
              {editedButton !== null ? (
                <button className="add-button" type="submit">Edit</button>
              ) : (<button className="add-button" onClick={(e) => {onClose(); addTodo(input[0], input[1])}}>Add</button>)}
            </div>
            <h1>Title</h1>
            <textarea cols="30" rows="1"
            onChange={(e) => input[0] = e.target.value}/>

            <h1>Description</h1>
            <textarea cols="30" rows="4"
            onChange={(e) => input[1] = e.target.value}/>
        </div>

        <div className="add-task-modal-footer">
          <h1>Tags</h1>
          <div className="add-task-modal-filter">
            <button
            className="modal-filter-button"
            onClick={(e) => handleSelectingTags(e)}>
              <div className="color p"></div>work
            </button>
            <button className="modal-filter-button" onClick={(e) => handleSelectingTags(e)}>
              <div className="color b"></div>study
            </button>
            <button className="modal-filter-button" onClick={(e) => handleSelectingTags(e)}>
              <div className="color r"></div>entertainment
            </button>
            <button className="modal-filter-button" onClick={(e) => handleSelectingTags(e)}>
              <div className="color g"></div>family
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

