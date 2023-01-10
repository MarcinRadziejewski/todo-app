import "./AddTaskModal.css"

export default function AddTaskModal() {
  return (
    <div className="add-task-modal">
      <div className="add-task-modal-content"></div>
    </div>
  );
}

function AddTaskModalHeader() {
  return( <div className="add-task-modal-header">
    <button className="cancel">Cancel</button>
    <button className="add-button">Add</button>
  </div>
  );
}

//gibberish gibberish kill me 