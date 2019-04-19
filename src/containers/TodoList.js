import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  state: state.todos
});

export default connect(
  mapStateToProps,
  null,
  null
)(TodoList);