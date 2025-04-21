import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
    }
  }, []);
  const addTask = (task) => {
    const newItem = {
      name: task,
      isComplete: false,
    };
    setTasks((prevItems) => {
      const updatedTasks = [...prevItems, newItem];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  const deleteTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  const markasComplete = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task, i) =>
        i === index ? { ...task, isComplete: !task.isComplete } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const clearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };
  const completeAllTaks = () => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => ({
        ...task,
        isComplete: true,
      }));
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };
  const clearCompletedTaks = () => {
    {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.filter((task) => !task.isComplete);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      });
    }
  };
  return (
    <>
      <div className={`main-container ${darkMode ? "dark" : ""}`}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <TaskInput tasksAdded={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          markasComplete={markasComplete}
        />
        <Footer
          tasks={tasks}
          clearAllTaks={clearAllTasks}
          completeAllTaks={completeAllTaks}
          clearCompletedTaks={clearCompletedTaks}
        />
      </div>
    </>
  );
}

export default App;
