import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/Types';

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false 
				}
			]
		case TOGGLE_TODO:
			return state.map(todo =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);
		case UPDATE_TODO:
			return state.map(todo =>{
				console.log(state);
				return todo.id === action.id ? { ...todo, text: action.id.target.value, } : todo
			});
		case DELETE_TODO:
			return state.filter(( {id} ) => id !== action.id);
		default:
			return state;
	}
}

export default todos;