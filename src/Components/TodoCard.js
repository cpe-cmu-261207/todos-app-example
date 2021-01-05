import { useContext } from "react";
import { TodosContext } from "../App";

const TodoCard = ({ id, name }) => {
  const { state, dispatch } = useContext(TodosContext);

  const onRemoveTodo = () => {
    //filter new todo without this id
    const newTodo = state.myTodos.filter((todo) => todo.id !== id);

    //set new todo in state
    dispatch({
      type: "SET_TODO",
      payload: newTodo,
    });
  };
  return (
    <div className="shadow-md rounded-full px-6 py-2 w-2/5 grid grid-cols-2 bg-white my-3">
      <div className="flex items-center col-auto">
        <p>{name}</p>
      </div>

      <div className="flex items-center justify-end col-auto">
        <button
          onClick={onRemoveTodo}
          className="text-2xl text-red-500 focus:outline-none"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
