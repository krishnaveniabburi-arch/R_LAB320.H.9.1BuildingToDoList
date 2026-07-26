import { useState } from "react";
function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
   return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
export default TodoForm;