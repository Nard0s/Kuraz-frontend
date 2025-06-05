import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li
      className={task.completed ? "completed" : ""}
      onClick={() => toggleTask(task.id)}
      title="Click to toggle completed"
    >
      {task.title}
      <button
        className="delete-btn"
        title={`Delete task: ${task.title}`}
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
      >
        ×
      </button>
    </li>
  );
}

export default TaskItem;
