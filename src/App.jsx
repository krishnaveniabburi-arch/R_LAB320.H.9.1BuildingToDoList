import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
const initialState = [
  {
    id: 1,
    title: "Find that missing sock",
    completed: false,
  },
  {
    id: 2,
    title: "Finish React homework",
    completed: true,
  },
  {
    id: 3,
    title: "Walk the dog",
    completed: false,
  },
];
function APP() {
   const [todos, setTodos] = useState(initialState);
}
         

export default App
