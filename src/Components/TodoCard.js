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

    //trigger to save todo to localstroage
    dispatch({
      type: "TRIGGER_SAVE",
      payload: true,
    });
  };
  return (
    <div className="shadow-md rounded-md px-3 py-5 w-2/5 grid grid-cols-2 bg-white my-3">
      <div>
        <p>id : {id}</p>
        <p>todo : {name}</p>
      </div>
      <div className="col-start-3">
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
