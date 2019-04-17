import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../actions';
import TodoList from '../components/TodoList';


const getTodos = (todos) => {
  return todos; 
}

const mapStateToProps = state => ({
  state: getTodos(state.todos)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  updateTodo: id => dispatch(updateTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TodoList);