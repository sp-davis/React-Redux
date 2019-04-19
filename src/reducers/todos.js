import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	UPDATE_TODO
} from '../actions/Types';

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.data.id,
					text: action.data.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map(todo =>
				todo.id === action.data.id ? {
					...todo,
					completed: !todo.completed
				} : todo
			)
		case UPDATE_TODO:
			return state.map(todo =>
				todo.id === action.data.id ? {
					...todo,
					text: action.data.text
				} : todo
			)
		case DELETE_TODO:
			return state.filter(({
				id
			}) => id !== action.data.id)
		default:
			return state;
	}
}

export default todos;