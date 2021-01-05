import TodoCard from "./Components/TodoCard";
import TodoForm from "./Components/TodoForm";
import { createContext, useEffect, useReducer } from "react";

const initialState = {
  myTodos: [],
  saveTodos: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        myTodos: [...state.myTodos, action.payload],
      };
    case "SET_TODO":
      return {
        ...state,
        myTodos: action.payload,
      };
    case "TRIGGER_SAVE":
      return {
        ...state,
        saveTodos: action.payload,
      };
    default:
      throw new Error();
  }
}

export const todosContext = createContext({});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch todos from localstroage
  function fetchTodos() {
    const todos = localStorage.getItem("myTodos");
    if (todos) {
      dispatch({
        type: "SET_TODO",
        payload: JSON.parse(todos),
      });
    }
  }

  //use function fetchTodos() one time once page has loaded
  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    //if dispatch trigger it will save state todos to localstorage
    if (state.saveTodos === true) {
      localStorage.setItem("myTodos", JSON.stringify(state.myTodos));

      //trigger to false
      dispatch({
        type: "TRIGGER_SAVE",
        payload: false,
      });
    }
  });

  return (
    <todosContext.Provider value={{ state, dispatch }}>
      <div className="container mx-auto h-screen">
        <h1 className="text-4xl py-3 text-center">Todos</h1>

        <div
          className="flex flex-col items-center overflow-auto"
          style={{ maxHeight: "500px" }}
        >
          {state.myTodos.map((todo) => (
            <TodoCard id={todo.id} name={todo.name} />
          ))}
        </div>

        <div className="flex justify-center my-3">
          <TodoForm />
        </div>
      </div>
    </todosContext.Provider>
  );
}

export default App;
