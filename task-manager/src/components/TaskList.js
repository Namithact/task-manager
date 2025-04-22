import React from "react";

export default function TaskList({ tasks, onDelete, markasComplete }) {
  function calculateDaysLeft(dueDate) {
    const currentDate = new Date();
    const targetDate = new Date(dueDate);

    currentDate.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const timeDifference = targetDate - currentDate;
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  }

  return (
    <>
      {tasks.map((task, index) => {
        const daysLeft = calculateDaysLeft(task.dueDate);

        return (
          <div key={index} className="task-container">
            <div className={`task-info ${task.isComplete ? "completed" : ""}`}>
              <input
                type="checkbox"
                onChange={() => markasComplete(index)}
                className="checkbox"
                checked={task.isComplete}
              />
              <p className="task-item">{task.name}</p>
             {task.priority&& <p className="task-item">| {task.priority} priority </p>}
             {task.dueDate&&<p className="task-item">
                {daysLeft > 0
                  ? ` | ${daysLeft} day(s) left`
                  : daysLeft === 0
                  ? " | Due today"
                  : ` | Overdue by ${Math.abs(daysLeft)} day(s)`}
              </p>} 
            </div>
            <button className="delete-button" onClick={() => onDelete(index)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}
