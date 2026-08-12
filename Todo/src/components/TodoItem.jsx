function TodoItem({ todo, handleToggle, handleEdit, handleDelete }) {
  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggle(todo.id)}
        />

        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </div>

      <div>
        <button onClick={() => handleEdit(todo)}>Edit</button>

        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
