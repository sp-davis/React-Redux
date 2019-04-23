import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPen, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../main.css';

library.add(faTrash, faPen, faCheck);

class Todo extends Component {
  render() {
    const {
      toggleTodo,
      todo,
      deleteTodo,
      updateTodo
    } = this.props;
    let newText;
    return (
      <div>
        <input
          defaultValue={todo.text}
          ref={node => (newText = node)}
          onChange={() => updateTodo(todo.id, newText.value)}
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
          className="inputControl"
        />
        <button
          onClick={() => toggleTodo(todo.id)}
          className="butnListed"
        >
          <FontAwesomeIcon icon="check" color="black" />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="butnListed"
        >
          <FontAwesomeIcon icon="trash" color="black" />
        </button>
      </div>
    );
  }
};

export default Todo;