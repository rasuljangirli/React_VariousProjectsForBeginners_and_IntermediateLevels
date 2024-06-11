import { createContext, useState } from "react";
import axios from "axios";

export const GlobalContex = createContext();

export const GlobalProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  //?DB request
  const getTasks = async () => {
    const request = await axios.get("http://localhost:3000/posts");
    setTasks(request.data);
  };
  //? Create
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/posts", {
      title,
      taskDesc,
    });

    const tasksArr = [...tasks, response.data];
    setTasks(tasksArr);
  };
  //? Delete
  const deleteTaskArr = async (taskDelete) => {
    await axios.delete(`http://localhost:3000/posts/${taskDelete.id}`);
    const afterDeleteTodos =
      tasks &&
      tasks.filter((task) => {
        return task.id != taskDelete.id;
      });
    setTasks(afterDeleteTodos);
  };
  //? Update
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    const response = await axios.put(`http://localhost:3000/posts/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updateTasks);
  };

  return (
    <GlobalContex.Provider
      value={{
        tasks,
        createTask,
        deleteTaskArr,
        editTaskById,
        getTasks,
        setTasks,
      }}
    >
      {props.children}
    </GlobalContex.Provider>
  );
};
