import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar';

class ProgressDisplay extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "Omnifocus Progress",
      progress: 0.5,
      width: 300,
      innerWidth: 0,
      targetWidth: 0,
      startTime: 8,
      endTime: 22
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
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
    fetch('http://localhost:3001/taskdata').then(response => {
      if (response.ok) {
        return response.text();
      } else {
        console.log('Could not get task data.');
      }
    }).then(textResponse => {
      this.updateProgress(Number(textResponse));
    });
  }

  updateProgress(newProgress) {
    const newInnerWidth = this.state.width * newProgress;
    this.setState({
      progress: newProgress,
      innerWidth: newInnerWidth
    });
  }

  updateTarget() {
    const d = new Date();
    const newTargetWidth = d.getHours() < this.state.startTime ? 0 : 280 * (d.getHours() + (d.getMinutes() / 60) - this.state.startTime) / (this.state.endTime - this.state.startTime);
    this.setState({
      targetWidth: newTargetWidth
    });
  }

  render() {
    return (
      <div className="progress-display" height="200px" width="300px">
        <p id="pbar-title">{this.state.title}</p>
        <ProgressBar height="50px" width={`${this.state.width}px`} innerHeight="40px" innerWidth={`${this.state.innerWidth}px`}
          targetWidth={`${this.state.targetWidth}px`} targetHeight="32px"/>
        <button id="update-button" onClick={this.handleButtonClick}>Update</button>
      </div>
    );
  }
}

export default ProgressDisplay;
