import "./AddTaskModal.css"

export default function AddTaskModal( {modalOpen, onClose, input, addTodo, setSelectedTags, list, setList} ) {


  if (modalOpen.mode === null) {
    return null
  }

  const handleEditing = (index, title, description) => {
    let newList = [...list];
    newList[index].title = title;
    newList[index].description = description;

    setList(newList);
  }

  const handleSelectingTags = (e) => {
    //e.currentTarget ignores the children, e.target doesn't
    const targetText = e.currentTarget.textContent;
    setSelectedTags((prevState) => ({...prevState, [targetText]: !prevState[targetText]}))
    e.currentTarget.classList.toggle("selected")
  }

  if (modalOpen.mode === "add"){
    return (
      <div className="add-task-modal" onClick={onClose}>
        <div className="add-task-modal-content" onClick={e => e.stopPropagation()}>

          <div className="add-task-modal-body">

              <div className="modal-header">
                <button className="cancel-button" onClick={onClose}>Cancel</button>
                <button className="add-button" onClick={() => {onClose(); addTodo(input[0], input[1])}}>Add</button>
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

  if (modalOpen.mode === "edit"){
    return (
      <div className="add-task-modal" onClick={onClose}>
        <div className="add-task-modal-content" onClick={e => e.stopPropagation()}>

          <div className="add-task-modal-body">

              <div className="modal-header">
                <button className="cancel-button" onClick={onClose}>Cancel</button>
                <button className="add-button" onClick={() => {onClose(); handleEditing(modalOpen.index, input[0], input[1])}}>Edit</button>
              </div>
              <h1>Title</h1>
              <textarea cols="30" rows="1"
              defaultValue={modalOpen.title}
              onChange={(e) => input[0] = e.target.value}/>

              <h1>Description</h1>
              <textarea cols="30" rows="4"
              defaultValue={modalOpen.description}
              onChange={(e) => input[1] = e.target.value}
              />
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
}

