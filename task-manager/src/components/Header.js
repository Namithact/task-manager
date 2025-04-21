import React from 'react'

export default function Header({toggleDarkMode, darkMode}) {
  return (
    <header className='App-header'>
    <h2>Task Manager</h2>
    <div className="toggle-wrapper">
    <span className="toggle-label">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </span>
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <span className="slider round"></span>
    </label>
  </div>
  </header>
  )
}
