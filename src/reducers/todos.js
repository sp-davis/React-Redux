import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/Types';

const initialState = {
	todos : []
}

const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return Object.assign({}, state, {
				todos: state.todos.concat({
					id: action.data.id,
					text: action.data.text,
					completed: false
				})
			})
		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.map(todo =>
					todo.id === action.data.id ? { ...todo, completed: !todo.completed } : todo
				)
			})
		case UPDATE_TODO:
		return Object.assign({}, state, {
			todos: state.todos.map(todo => 
				todo.id === action.data.id ? { ...todo, text: action.data.text } : todo
			)
		})
		case DELETE_TODO:
		console.log(state)
			return Object.assign({}, state, {
				todos: state.todos.filter(( {id} ) => id !== action.data.id)
			})
		default:
			return state;
	}
}

export default todos;