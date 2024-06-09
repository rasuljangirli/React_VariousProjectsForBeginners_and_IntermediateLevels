import { useEffect, useState } from "react";
import CreateTodo from "./Components/CreateTodo";
import ListsTodo from "./Components/ListsTodo";
import axios from "axios";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

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

  //?DB request
  const getTasks = async () => {
    const request = await axios.get("http://localhost:3000/posts");
    setTasks(request.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="container">
      <CreateTodo onCreate={createTask} />
      <h1>Tasks</h1>
      <ListsTodo
        tasks={tasks}
        deleteTaskArr={deleteTaskArr}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
