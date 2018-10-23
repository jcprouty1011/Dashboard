import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressDisplay from './ProgressDisplay';
import TaskDisplay from './TaskDisplay';

class App extends Component {
  render() {
    return (
      <div style={{'display': 'flex'}}>
        <ProgressDisplay />
        <TaskDisplay />
      </div>
    );
  }
}

export default App;
