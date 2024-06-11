import React, { useContext } from "react";
import { useState } from "react";
import { GlobalContex } from "../contaxt/GlobalState";

function CreateTodo({ task, taskFormUpdate, onUpdate }) {
  const { createTask } = useContext(GlobalContex);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handelChange = (e) => {
    setTitle(e.target.value);
  };

  const handelTaskDescChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const alertString =
    "Either the title or the description part is empty, please write the information in full form";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDesc.trim() != "" && title.trim() != "") {
      if (taskFormUpdate) {
        onUpdate(task.id, title, taskDesc);
      } else {
        createTask(title, taskDesc);
      }
      setTitle("");
      setTaskDesc("");
    } else {
      alert(alertString);
    }
  };

  return (
    <div>
      {taskFormUpdate ? (
        <form className="formUpdate">
          <h3>Update Task</h3>
          <label className="formLabel">Title</label>
          <input
            value={title}
            onChange={handelChange}
            type="text"
            className="formInput"
          />
          <label className="formLabel">Assignment Topic</label>
          <textarea
            value={taskDesc}
            onChange={handelTaskDescChange}
            rows={5}
            className="formInput"
          ></textarea>
          <button className="formButton" onClick={handleSubmit}>
            Update Task
          </button>
        </form>
      ) : (
        <div>
          <form className="form">
            <h3>Add Task</h3>
            <label className="formLabel">Title</label>
            <input
              value={title}
              onChange={handelChange}
              type="text"
              className="formInput"
            />
            <label className="formLabel">Assignment Topic</label>
            <textarea
              value={taskDesc}
              onChange={handelTaskDescChange}
              rows={5}
              className="formInput"
            ></textarea>
            <button className="formButton" onClick={handleSubmit}>
              Add Task
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateTodo;
