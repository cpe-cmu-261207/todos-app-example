import TodoForm from "./Components/TodoForm";
import { createContext, useEffect, useReducer } from "react";
import TodoLists from "./Components/TodoLists";

import { initialState, reducer } from "./utils/todo-reducer";

export const TodosContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch todos from localstroage
  function fetchTodos() {
    const localTodos = localStorage.getItem("myTodos");
    if (localTodos) {
      dispatch({
        type: "SET_TODO",
        payload: JSON.parse(localTodos),
      });
    }
  }

  //use function fetchTodos() when page refresh and rendered
  useEffect(fetchTodos, []);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(state.myTodos));
  }, [state.myTodos]); //run when state.myTodos change

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div className="container mx-auto h-screen">
        <h1 className="text-4xl py-3 text-center">Todos</h1>

        <TodoLists todos={state.myTodos} />

        <TodoForm />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
