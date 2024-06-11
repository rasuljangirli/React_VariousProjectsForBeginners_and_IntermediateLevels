import React, { useState, useContext } from "react";
import CreateTodo from "./CreateTodo";
import { GlobalContex } from "../contaxt/GlobalState";

function TodoItem({ task }) {
  const { deleteTaskArr, editTaskById } = useContext(GlobalContex);

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
    editTaskById(id, updatedTitle, updatedTaskDesch);
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
