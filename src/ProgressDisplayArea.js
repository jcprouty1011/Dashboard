import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar';

class ProgressDisplayArea extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "Omnifocus Progress",
      progress: 0.5,
      width: 300,
      innerWidth: 0,
      targetWidth: 0,
      startTime: 8,
      endTime: 22,
      updateMessage: ""
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.updateTarget = this.updateTarget.bind(this);
  }

  handleButtonClick(event) {
    this.performFetch();
    this.updateTarget();
  }

  componentDidMount() {
    this.performFetch();
    this.updateTarget();
  }

  performFetch() {
    fetch('http://localhost:3001/daytaskdata').then(response => {
      if (response.ok) {
        return response.text();
      } else {
        console.log('Could not get task data.');
      }
    }).then(textResponse => {
      this.updateProgress(Number(textResponse));
    });
  }

  formatTime(minutes) {
    if (String(minutes).length === 1) {
      return '0' + String(minutes);
    } else {
        return String(minutes);
    }
  }

  updateProgress(newProgress) {
    const d = new Date();
    const newInnerWidth = this.state.width * newProgress;
    this.setState({
      progress: newProgress,
      innerWidth: newInnerWidth,
      updateMessage: `last updated at ${d.getHours()}:${this.formatTime(d.getMinutes())}:${this.formatTime(d.getSeconds())}`
    });
  }

  updateTarget() {
    const d = new Date();
    const newTargetWidth = d.getHours() < this.state.startTime ? 0 : 280 * Math.min(1, (d.getHours() + (d.getMinutes() / 60) - this.state.startTime) / (this.state.endTime - this.state.startTime));
    this.setState({
      targetWidth: newTargetWidth
    });
  }

  render() {
    return (
      <div className="progress-display" height="200px" width="300px">
        <h4 id="pbar-title">{this.state.title}</h4>
        <ProgressBar height="50px" width={`${this.state.width}px`} innerHeight="40px" innerWidth={`${this.state.innerWidth}px`}
          targetWidth={`${this.state.targetWidth}px`} targetHeight="32px"/>
        <button id="update-button" onClick={this.handleButtonClick}>Update</button>
        <p>{this.state.updateMessage}</p>
      </div>
    );
  }
}

export default ProgressDisplayArea;
