import { useState } from "react";
import CreateTodo from "./Components/CreateTodo";
import ListsTodo from "./Components/ListsTodo";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const tasksArr = [
      ...tasks,
      {
        id: Math.round(Math.random() * 99999),
        title,
        taskDesc,
      },
    ];
    setTasks(tasksArr);
  };

  const deleteTaskArr = (taskDelete) => {
    const afterDeleteTodos =
      tasks &&
      tasks.filter((task) => {
        return task.id != taskDelete.id;
      });
    setTasks(afterDeleteTodos);
  };

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
        console.log(task);
      }
      return task;
    });
    setTasks(updateTasks);
  };

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
