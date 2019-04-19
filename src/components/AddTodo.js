import React from 'react';

const AddTodo = ({addTodo}) => {
  let input;
  return (
  <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          input.value && addTodo(input.value);
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
};
      
export default AddTodo;