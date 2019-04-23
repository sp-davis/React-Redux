import React from 'react';
import Todo from '../containers/Todo';

const TodoList = ({state}) => { 
	return (
		<div className="todoDisplay">
			{state.map(todo => (
				<Todo
					key={todo.id} 
					todo={todo}
				/>
			))}
		</div>
	)
};

export default TodoList;