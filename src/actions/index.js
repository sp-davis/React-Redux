import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from './Types';

let nextTodoId = 0;

export const addTodo = text => ({
  type: ADD_TODO,
  data: {
    id: nextTodoId++,
    text
  }
  
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  data: {
    id
  }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
    data: {
      id
    }
});

export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  data: {
    id,
    text
  }
});