export const initialState = {
  myTodos: [],
};

export function reducer(state, action) {
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
    case "DELETE_TODO":
      return {
        ...state,
        myTodos: state.myTodos.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error();
  }
}
