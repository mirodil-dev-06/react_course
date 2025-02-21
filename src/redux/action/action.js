// actions.js
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO, SET_TODOS } from './actionTypes';

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});

export const editTodo = (id, newText) => ({
  type: 'EDIT_TODO',
  payload: { id, newText },
});
export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const setTodos = (todos) => ({
  type: 'SET_TODOS',
  payload: todos
});

