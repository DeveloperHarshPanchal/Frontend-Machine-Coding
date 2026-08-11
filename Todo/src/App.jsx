import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Add / Update Todo
  const handleSubmit = (e) => {
    e.preventDefault();

    const value = input.trim();

    if (!value) return;

    if (editId !== null) {
      // Update existing todo
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editId ? { ...todo, text: value } : todo,
        ),
      );

      setEditId(null);
    } else {
      // Add new todo
      const newTodo = {
        id: Date.now(),
        text: value,
        completed: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    setInput("");
  };

  // Toggle completed
  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Delete todo
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Start editing
  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h1>Todo App</h1>

        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            placeholder="Enter todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit">{editId !== null ? "Update" : "Add"}</button>
        </form>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty">No todos found</p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`todo-item ${todo.completed ? "completed" : ""}`}
              >
                <div className="todo-left">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                  />

                  <span>{todo.text}</span>
                </div>

                <div className="actions">
                  <button onClick={() => handleEdit(todo)}>Edit</button>

                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
