import React, { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        className="add-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="add-button"
        onClick={() => {
          onAddTodo(title);
          setTitle("");
        }}
      >
        Add Task
      </button>
    </>
  );
}
export default AddTodo;
