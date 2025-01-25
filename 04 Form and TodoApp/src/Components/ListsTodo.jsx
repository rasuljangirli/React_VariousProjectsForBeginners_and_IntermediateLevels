import React from "react";
import TodoItem from "./TodoItem";

function ListsTodo({ tasks, deleteTaskArr, onUpdate }) {
  return (
    <div className="listsTodoContainer">
      {tasks &&
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            tasks={tasks}
            deleteTaskArr={deleteTaskArr}
            onUpdate={onUpdate}
          />
        ))}
    </div>
  );
}

export default ListsTodo;
