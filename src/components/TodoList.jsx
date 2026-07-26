import TodoItem from "./TodoItem";
function TodoList({
  todos,
  toggleComplete,
  deleteTodo,
  editTodo,
}) {
return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;