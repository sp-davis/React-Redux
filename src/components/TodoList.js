import React from 'react';
import Todo from './Todo';

const TodoList = ({toggleTodo, deleteTodo, updateTodo, state}) => { 
	return (
		<div>
			{state.map(todo => (
				<Todo
					key={todo.id} 
					todo={todo}
					onClick={toggleTodo} 
					onDelete={deleteTodo}
					onUpdate={updateTodo}
				/>
			))}
		</div>
	)
};

export default TodoList;