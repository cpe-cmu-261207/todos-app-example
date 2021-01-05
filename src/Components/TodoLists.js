import TodoCard from "./TodoCard";

const TodoLists = ({ todos }) => (
  <div
    className="flex flex-col items-center overflow-auto"
    style={{ maxHeight: "500px" }}
  >
    {todos.map((todo) => (
      <TodoCard id={todo.id} name={todo.name} />
    ))}
  </div>
);

export default TodoLists;
