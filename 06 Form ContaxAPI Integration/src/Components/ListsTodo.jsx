import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { GlobalContex } from "../contaxt/GlobalState";

function ListsTodo({}) {
  const { tasks } = useContext(GlobalContex);

  return (
    <div className="listsTodoContainer">
      {tasks &&
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            //!
          />
        ))}
    </div>
  );
}

export default ListsTodo;
