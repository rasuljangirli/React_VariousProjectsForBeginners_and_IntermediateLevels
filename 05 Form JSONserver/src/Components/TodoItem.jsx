import React, { useState } from "react";
import CreateTodo from "./CreateTodo";

function TodoItem({ task, deleteTaskArr, onUpdate }) {
  const { id, title, taskDesc } = task;
  const [showEdit, setShowEdit] = useState(false);
  const deleteTask = () => {
    deleteTaskArr(task);
  };

  const updateTask = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesch) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesch);
  };
  return (
    <div className="todoItem">
      {showEdit ? (
        <CreateTodo task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div className="todoItemContainer">
          <h3 style={{ maxWidth: "100%", textAlign: "center" }}>{title}</h3>
          <p style={{ maxWidth: "100%", textAlign: "center" }}>{taskDesc}</p>
          <div className="todoItemContainerBtn">
            <button className="todoItemBtn" onClick={deleteTask}>
              delete
            </button>
            <button className="todoItemBtn" onClick={updateTask}>
              update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TodoItem;
