import React, {Component} from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import '../main.css';

class App extends Component { 
  render(){
    return (
      <div>
        
        <div className="container">
          <h1 className="projectTitle">React - Redux todo list</h1>
          <AddTodo />
          <TodoList />
        </div>
      </div>
      
    )
  }
};

export default App;