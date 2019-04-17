import React from 'react';
import Todo from './Todo';

const TodoList = (props) => { 
	return (
		<div>
			{props.state.todos.map(todo => (
				<Todo
					key={todo.id} 
					todo={todo}
					onClick={props.toggleTodo} 
					onDelete={props.deleteTodo}
					onUpdate={props.updateTodo}
				/>
			))}
		</div>
	)
};

export default TodoList;