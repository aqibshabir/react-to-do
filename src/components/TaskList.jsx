import React from "react";
import Task from "./Task";
// import DeleteButton from "./DeleteButton";
// import EditButton from "./EditButton";

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <>
      <div className="task-list">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Task
                todo={todo}
                onChange={onChangeTodo}
                onDelete={onDeleteTodo}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
