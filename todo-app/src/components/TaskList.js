import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul id="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
