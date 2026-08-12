import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (editId !== null) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo,
        ),
      );

      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    setInput("");
  };

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h1>Todo App</h1>

        <TodoForm
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          editId={editId}
        />

        <div className="todo-list">
          {todos.length === 0 ? (
            <p>No todos found</p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleToggle={handleToggle}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
