import React from "react";
import Item from "./Item";

const TList = ({ tasks, updateTask, deleteTask }) => (
  <ul>
    {tasks.map((task) => (
      <Item
        key={task.id}
        task={task}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    ))}
  </ul>
);

export default TList;
