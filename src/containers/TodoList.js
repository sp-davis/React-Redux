import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  state: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(TodoList);