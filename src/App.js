import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(event) {
    const name = todoNameRef.current.value;
    if(name == '') {
      return;
    }
    
    setTodos(prevTodos => {
      return (
        [...prevTodos, { id: uuidv4(), name: name }]
      )
    })

    /* clears the input box */
    todoNameRef.current.value = null;
  }

  return (
    <div className="App">

      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add todo</button>
      <button>Clear completed</button>
      <div>0 left to do</div>

      <TodoList todos={todos} />
   
    </div>
  );
}

export default App;
