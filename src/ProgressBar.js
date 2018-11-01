import React, { Component } from 'react';
import './App.css';

class ProgressBar extends Component {
  render() {
    const outerStyle = {
      width: this.props.width,
      height: this.props.height
    };
    const innerStyle = {
      width: this.props.innerWidth,
      height: this.props.innerHeight
    };
    const targetStyle = {
      width: this.props.targetWidth,
      height: this.props.targetHeight
    };
    return (
      <div className="progress-bar" style={outerStyle}>
        <div className="inner-bar" style={innerStyle}>
        </div>
        <div className="target-bar" style={targetStyle}>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
