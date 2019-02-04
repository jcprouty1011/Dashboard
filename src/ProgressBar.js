import React, { Component } from 'react';
import './App.css';

const ProgressBar = (props) => {
  const outerStyle = {
    width: props.width,
    height: props.height
  };
  const innerStyle = {
    width: props.innerWidth,
    height: props.innerHeight
  };
  const targetStyle = {
    width: props.targetWidth,
    height: props.targetHeight
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

export default ProgressBar;
