import React from "react";

export default function TaskInput({ tasksAdded }) {
  function addTask() {
    const taskInput = document.querySelector(".task-input");
    tasksAdded(taskInput.value);
    taskInput.value = "";
  }
  return (
    <>
      <div className="task-input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          className="task-input"
        />
        <button className="add-task-button" onClick={addTask}>
          Add Task
        </button>
      </div>
    </>
  );
}
