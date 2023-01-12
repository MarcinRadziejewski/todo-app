import "./AddTaskModal.css"

export default function AddTaskModal( {modalOpen, onClose} ) {
  if (!modalOpen) {
    return null
  }

  return (
    <div className="add-task-modal" onClick={onClose}>
      <div className="add-task-modal-content" onClick={e => e.stopPropagation()}>
        <div className="add-task-modal-header">
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button className="add-button">Add</button>
        </div>

        <div className="add-task-modal-body">
          <form action="" class="task-modal-form">
            <label htmlFor="title">Title</label>
            <input type="text" name="title"/>
          </form>
          <form action="" class="task-modal-form">
            <label htmlFor="description">Description</label>
            <input type="text" name="description"/>
          </form>
        </div>

        <div className="add-task-modal-footer">

        </div>
      </div>
    </div>
  );
}

