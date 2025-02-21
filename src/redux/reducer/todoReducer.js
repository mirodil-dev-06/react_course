// reducer.js
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, SET_TODOS } from '../action/actionTypes';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
        ),
      };
      case SET_TODOS:
        return {
          ...state,
          todos: action.payload
        };

    default:
      return state;
  }
};

export  {todoReducer};