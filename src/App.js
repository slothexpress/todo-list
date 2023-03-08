import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  /* called once, on load */
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   
    if(storedTodos) {
      setTodos(storedTodos);
    }

  }, []);

  /* called every time something in the todos array changes */
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);


  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id)
    
    /* toggles the complete flag/checkbox */
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

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

      <TodoList todos={todos} toggleTodo={toggleTodo} />
   
    </div>
  );
}

export default App;
