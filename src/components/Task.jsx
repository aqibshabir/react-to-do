import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;
  //This part deals with editing
  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          className="input"
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button className="button" onClick={() => setIsEditing(false)}>
          <FaAngleRight />
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        <p>{todo.title}</p>
        <button className="button" onClick={() => setIsEditing(true)}>
          <MdEdit className="edit" />
        </button>
      </>
    );
  }

  return (
    <div className="task">
      <label className="label">
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.done}
          onChange={(e) =>
            onChange({
              ...todo,
              done: e.target.checked,
            })
          }
        />

        {todoContent}
        <button className="button" onClick={() => onDelete(todo.id)}>
          <FaRegTrashAlt />
        </button>
      </label>
    </div>
  );
}

export default Task;
