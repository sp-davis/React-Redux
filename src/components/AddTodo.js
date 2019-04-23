import React from 'react';
import '../main.css';

const AddTodo = ({addTodo}) => {
  let input;
  return (
  <div className="addTodo">
      <form
        onSubmit={e => {
          e.preventDefault();
          input.value && addTodo(input.value);
          input.value = '';
        }}
      >
        <input 
          ref={node => (input = node)} 
          className="inputControl"
          placeholder="What do you need to do..."  
        />
        <button 
          type="submit" 
          className="butn"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
};
      
export default AddTodo;