import React, { useState } from "react";

export default function TaskInput({ tasksAdded }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  function addTask() {
    const taskObj = {
      task,
      date,
      priority,
    };
    tasksAdded(taskObj);
    setTask("");
    setDate("");
    setPriority("");
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
        <select
          className="task-priority task-date-priority"
          disabled={task.trim() === ""}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          value={priority}
        >
          <option value="" disabled hidden>
            Select Priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          value={date}
          disabled={task.trim() === ""}
          className="task-date task-date-priority"
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="add-task-button"
          disabled={task.trim() === ""}
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
