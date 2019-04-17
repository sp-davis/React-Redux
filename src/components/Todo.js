import React from 'react';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash, faPen, faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(faTrash);
library.add(faPen);
library.add(faCheck);

const Todo = ({ onClick,  todo, onDelete,  onUpdate}) => (
  <p>
		<input
			style={{
			textDecoration: todo.completed ? 'line-through' : 'none'
			}}
			defaultValue={todo.text}
			onChange={onUpdate}
    	/>
		<button
			onClick={() => onClick(todo.id)}
		>
			<FontAwesomeIcon 
				color="black"     
				icon="check"
			/>
		</button>
		<button 
			onClick={() => onDelete(todo.id)}
		>
		<FontAwesomeIcon 
			color="black"     
			icon="trash"
		 />
		</button>
  	</p>
  

);


export default Todo;