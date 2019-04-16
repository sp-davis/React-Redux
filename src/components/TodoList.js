import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import DeleteBtn from './DeleteBtn';
import { deleteTodo } from '../actions';

const TodoList = ({ todos, toggleTodo }) => (
  <div>
    <ul>
      {todos.map(todo => (
        <div>
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}  />
          <DeleteBtn {...todo} onClick={() => deleteTodo(todo.id)}/>
        </div>
       
      ))}
      {/* {todos.map(todo => (
        
      ))} */}
    </ul>
  </div>
  
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;