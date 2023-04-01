import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function App() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const todo = e.target.elements.todo.value;
    if (todo) {
      setTodos([...todos, todo]);
      e.target.elements.todo.value = '';
    }
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
