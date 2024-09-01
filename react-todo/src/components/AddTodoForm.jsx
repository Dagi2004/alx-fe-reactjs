import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddTodoForm = ({ onAddTodo }) => {
  const [tasks, setTasks] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tasks.trim()) return;
    onAddTodo(tasks);
    setTasks("");
  };
  return (
    <form onSubmit={handleSubmit} style={{ border: "none", padding: "30px" }}>
      <input
        type="text"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
        placeholder="Add Todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTodoForm;
