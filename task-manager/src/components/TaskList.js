import React from "react";

export default function TaskList({ tasks, onDelete, markasComplete }) {
  return (
    <>
      {tasks.map((task, index) => (
        <div
          key={index}
          className='task-container'
        >
          <div className={`task-info ${task.isComplete ? "completed" : ""}`}>
          <input
            type="checkbox"
            onChange={() => markasComplete(index)}
            className="checkbox"
            checked={task.isComplete}
            
          />
          <p className="task-item">{task.name}</p></div>
          <button className="delete-button" onClick={() => onDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
