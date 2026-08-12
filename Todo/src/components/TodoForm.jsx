function TodoForm({ input, setInput, handleSubmit, editId }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">{editId !== null ? "Update" : "Add"}</button>
    </form>
  );
}

export default TodoForm;
