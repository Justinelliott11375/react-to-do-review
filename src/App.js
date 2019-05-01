import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Do something",
        completed: false
      },
      {
        id: 2,
        title: "Do something else",
        completed: true
      },
      {
        id: 3,
        title: "Do something else again",
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
