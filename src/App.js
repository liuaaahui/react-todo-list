import React, {Component} from 'react';
import './App.css';
import TodoListContainers from './containers/TodoListContainers'
import TodoFormContainers from './containers/TodoFormContainers'

class App extends Component{
  render(){
  return (
    <div className="App">
      <TodoListContainers />
      <TodoFormContainers />
    </div>
  );
}
}
export default App;
