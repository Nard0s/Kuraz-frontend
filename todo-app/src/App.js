import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Read a book", completed: true },
  ]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const addTask = (title) => {
    if (!title.trim()) {
      setError("Task title must not be empty!");
      return;
    }
    setError("");
    const newTask = {
      id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const deleteAllTasks = () => {
  setTasks([]); //clears all tasks
};

  return (
    <div id="container">
      <h2>Simple Task Manager</h2>
      <TaskInput addTask={addTask} error={error} />
      <FilterButtons currentFilter={filter} setFilter={setFilter} />
      <TaskList
  tasks={filteredTasks}
  toggleTask={toggleTask}
  deleteTask={deleteTask}
  deleteAll={deleteAllTasks} 
/>

    </div>
  );
}

export default App;
