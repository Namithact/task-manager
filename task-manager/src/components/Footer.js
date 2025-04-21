import React from "react";

export default function Footer({
  tasks,
  clearAllTaks,
  completeAllTaks,
  clearCompletedTaks,
}) {
  return (
    <div className="footer-container">
      <div className="task-summary">
        <h4>Total Tasks: {tasks.length}</h4>
        {tasks.length > 0 && <div className="task-actions"> <button className="footer-button" onClick={() => clearAllTaks()}>
          Clear All
        </button>
        <button className="footer-button" onClick={() => completeAllTaks()}>
          Complete All
        </button>
        <button className="footer-button" onClick={() => clearCompletedTaks()}>
          Clear All completed Tasks
        </button></div>}
       
      </div>
      <div className="footer-content">
        
      <p>Manage your tasks efficiently</p>
        <p>Created by Namitha</p>
        <p>© 2025 Task Manager</p>
      </div>
    </div>
  );
}
