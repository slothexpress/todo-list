import React from "react";
import "./Todo.css";

function Todo({ todo, toggleTodo }) {
  function handleTodoCheck() {
    toggleTodo(todo.id);
  }

  return (
    <div className="todo">
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoCheck}
        />

        <span>{todo.name}</span>
      </label>
    </div>
  );
}

export default Todo;
