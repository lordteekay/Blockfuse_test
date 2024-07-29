import React, { useState } from "react";
import TList from "./TList";
import TForm from "./TForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask) =>
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  const deleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  return (
    <div>
      <TForm addTask={addTask} />
      <TList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
