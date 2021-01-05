import { useContext, useState } from "react";
import { TodosContext } from "../App";
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodosContext);

  const addTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
      //add new todo to state
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Date.now(),
          name: todo,
        },
      });
      //clear input
      setTodo("");
    } else {
      alert("please add some todo ?");
    }
  };

  return (
    <form onSubmit={addTodo} className="flex flex-col items-center my-3">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-auto">
          <input
            type="text"
            className="px-4 py-2 rounded-md shadow-md focus:outline-none"
            placeholder="new todo"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 rounded-md shadow-md bg-green-500 text-white focus:outline-none"
          >
            ADD
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
