import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TaskList from "./components/TaskList";
import Heading from "./components/Heading";
import Sort from "./components/Sort";

let nextId = 0;
function App() {
  const [todos, setTodos] = useState([]);

  //function adds todos
  function handleAddTodo(title) {
    setTodos([
      //makes copy of entire todos array (good practice)
      ...todos,
      //adds new todo object in array
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  //function changes todo
  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((todo) => {
        // if id matches the next todo id - it updates
        if (todo.id === nextTodo.id) {
          return nextTodo;
          //if it doesn't - it wont update
        } else {
          return todo;
        }
      })
    );
  }

  //function deletes todo
  function handleDeleteTodo(todoId) {
    //if id doesn't match - stay in array
    //if it does - it gets deleted
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <Heading />
      <div className="add-sort">
        <AddTodo onAddTodo={handleAddTodo} />
        <Sort />
      </div>
      <TaskList
        todos={todos} //prop
        onChangeTodo={handleChangeTodo} //state
        onDeleteTodo={handleDeleteTodo} //state
      />
    </>
  );
}

export default App;
