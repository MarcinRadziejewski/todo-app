import "./AddTaskModal.css"

export default function AddTaskModal() {
  return (
    <div className="add-task-modal">
      <AddTaskModalHeader />
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