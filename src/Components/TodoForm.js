import { useContext, useState } from "react";
import { todosContext } from "../App";
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(todosContext);

  const addTodo = (e) => {
    e.preventDefault();
    if (todo !== "") {
      //add new todo to state
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Math.floor(Math.random() * 1000), //random id with Math.random() **have a bug fix if you can
          name: todo,
        },
      });

      //trigger to save todo to localstroage
      dispatch({
        type: "TRIGGER_SAVE",
        payload: true,
      });
      //clear input
      setTodo("");
    } else {
      alert("please add some todo ?");
    }
  };

  return (
    <form onSubmit={addTodo}>
      <h1>Add todo</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
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
