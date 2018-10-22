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
    return (
      <div className="progress-bar" style={outerStyle}>
        <div className="inner-bar" style={innerStyle}>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
