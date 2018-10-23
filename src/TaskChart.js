import React from 'react';

class TaskChart extends React.Component {
  render() {
    if (this.props.status === 'waiting') {
      return <h2>Awaiting data...</h2>;
    } else if (this.props.status === 'chart') {
      const yVals = this.props.taskData.map((element) => {
        const heightInner = 400 * element[3] / 600;
        const heightOuter = 400 * element[4] / 600;
        const yInner = 450 - heightInner;
        const yOuter = 450 - heightOuter;
        return [heightInner, heightOuter, yInner, yOuter];
      }).reverse();

      const barRects = [];
      const horizontalTicks = [];
      const textLabels = [];
      const gridLines = [];
      const gridLabels = [];
      for (let i = 0; i < 7; i++) {
        barRects.push(<rect key={i} x={85 + i * 100} y={yVals[i][3]} width='50' height={yVals[i][1]} stroke='none' fill='cyan' />);
        barRects.push(<rect key={i + 7} x={85 + i * 100} y={yVals[i][2]} width='50' height={yVals[i][0]} stroke='blue' strokeWidth='3px' fill='none' />);
        horizontalTicks.push(<line x1={110 + i * 100} y1='450' x2={110 + i * 100} y2='460' stroke='black' />)
        textLabels.push(<text x={70 + i * 100} y='480' fill='black'>{this.props.taskData[6 - i][0]}</text>)
        gridLines.push(<line x1='10' y1={(i + 1) * 50} x2='810' y2={(i + 1) * 50} stroke='black' />)
        gridLabels.push(<text x='20' y={(i + 2) * 50 - 2}>{(7 - i) * 75}</text>)
      }
      gridLines.push(<line x1='10' y1='400' x2='810' y2='400' stroke='black' />)
      gridLabels.push(<text x='20' y='48' fontWeight='bold' fontSize='20px'>Time (minutes)</text>)

      return (
        <svg width='820' height='520'>
          <rect x='10' y='10' width='800' height='500' stroke='black' fill='none'/>
          {gridLines}
          {gridLabels}
          {barRects}
          <line x1='10' y1='450' x2='810' y2='450' stroke='black' strokeWidth='4'/>
          <line x1='10' y1='10' x2='10' y2='510' stroke='black' strokeWidth='4'/>
          {horizontalTicks}
          {textLabels}
          <text x='400' y='500' fill='black' fontWeight='bold' fontSize='20px'>Date</text>
        </svg>
      );
    }
  }
}

export default TaskChart;
