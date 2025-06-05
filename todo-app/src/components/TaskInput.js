import React, { useState } from "react";

function TaskInput({ addTask, error }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <>
      <div id="input">
        <input
          id="new-task"
          type="text"
          placeholder="New task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <button id="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div id="error-msg">{error}</div>
    </>
  );
}

export default TaskInput;
