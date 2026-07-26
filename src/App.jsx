import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";
const initialState = [
  {
    id: 1,
    title: "Create Mockup",
    completed: true,
  },
  {
    id: 2,
    title: "Create Static Layout ",
    completed: false,
  },
  {
    id: 3,
    title: "Add interactivity",
    completed: false,
  },
];
export default function APP() {
   const [todos, setTodos] = useState(initialState);
   function addTodo(title) {
    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    // Add new todo to TOP
    setTodos([newTodo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, newTitle) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle }
          : todo
      )
    );
  }
     return (
    <div className="container">
      <h1>Todo List</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

     


