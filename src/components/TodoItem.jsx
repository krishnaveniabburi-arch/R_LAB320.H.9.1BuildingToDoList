import { useState } from "react";
function TodoItem({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
}) {
const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.title);

  function save() {
    editTodo(todo.id, text);
    setEditing(false);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {editing ? (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button onClick={save}>Save</button>
        </>
      ) : (
        <>
          <span
            className={
              todo.completed ? "completed" : ""
            }
          >
            {todo.title}
          </span>

          <button
            onClick={() => setEditing(true)}
          >
            Edit
          </button>

          <button
            disabled={!todo.completed}
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}


export default TodoItem;