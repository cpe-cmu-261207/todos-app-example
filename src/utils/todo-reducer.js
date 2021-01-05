export const initialState = {
  myTodos: [],
  saveTodos: false,
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
    default:
      throw new Error();
  }
}
