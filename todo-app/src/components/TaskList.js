import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask, deleteAll }) {
  return (
    <section className="todo">
      <h2>To-do</h2>

      <ul className="scroll" id="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <li><p>No tasks yet!</p></li>
        )}
      </ul>
      
      <div className="counter-container">
        <p><span id="todoCount">{tasks.length}</span> items total</p>
        <button
          id="deleteButton"
          className="delete-all-btn"
          onClick={deleteAll}
          disabled={tasks.length === 0}
        >
          Delete All
        </button>
      </div>
    </section>
  );
}

export default TaskList;
