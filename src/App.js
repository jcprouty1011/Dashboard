import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressDisplayArea from './ProgressDisplayArea';
import TaskScoreDisplayArea from './TaskScoreDisplayArea';
import DataEntryArea from './DataEntryArea';

const App = () =>
  (
    <div className='main-container'>
      <h1>Dashboard</h1>
      <div className='outer-div'>
        <div className='description'>
          <h2>Progress on Today's Tasks</h2>
        </div>
        <ProgressDisplayArea />
        <div className='description'>
          <h2>Recent Productivity Scores</h2>
        </div>
        <TaskScoreDisplayArea />
        <div className='description'>
          <h2>Data For Today</h2>
        </div>
        <DataEntryArea />
      </div>
    </div>
  );

export default App;
