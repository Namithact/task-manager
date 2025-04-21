import React, { useState } from "react";

export default function TaskInput({ tasksAdded }) {
  const [task, setTask] = useState("");
  function addTask() {
    const taskInput = document.querySelector(".task-input");
    tasksAdded(taskInput.value);
    taskInput.value = "";
    setTask("");
  }
  return (
    <>
      <div className="task-input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          className="task-input"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button className="add-task-button" disabled={task.trim()===''} onClick={addTask}>
          Add Task
        </button>
      </div>
    </>
  );
}
