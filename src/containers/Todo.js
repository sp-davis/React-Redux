import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../actions';
import Todo from '../components/Todo';

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text))
});

export default connect(
  null,
  mapDispatchToProps,
  null
)(Todo);