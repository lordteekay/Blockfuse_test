import React, { useState } from "react";

const Item = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSave = () => {
    updateTask(updatedTask);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTask.text}
            onChange={(e) =>
              setUpdatedTask({ ...updatedTask, text: e.target.value })
            }
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Item;
