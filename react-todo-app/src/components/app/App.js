import React, {useState} from 'react';
import './App.css';
import data from "../../data/tasks.json"

// components
import Header from '../header/Header';
import TodoList from '../todoList/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    console.table(data)
  }

  render() {
    return (
      <div className="App">
        <Header/>
        Hello World! There will be todo list soon.
        <TodoList toDoList={this.toDoList} />
      </div>
    );
  }
}
  
export default App;
  