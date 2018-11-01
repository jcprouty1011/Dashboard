import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressDisplay from './ProgressDisplay';
import TaskDisplay from './TaskDisplay';
import DataEntry from './DataEntry';

class App extends Component {
  render() {
    return (
      <div className='outer-div'>
        <h2>Progress Today</h2>
        <ProgressDisplay />
        <h2>Recent Productivity Scores</h2>
        <TaskDisplay />
        <h2>Data For Today</h2>
        <DataEntry />
      </div>
    );
  }
}

export default App;
