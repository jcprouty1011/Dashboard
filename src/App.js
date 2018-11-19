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
        <h2>Progress on Today's Tasks</h2>
        <p>The percentage of allotted time for today's tasks completed thus far,
        compared to a target percentage for this time of day.</p>
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
