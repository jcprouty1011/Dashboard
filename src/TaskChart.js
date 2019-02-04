import React from 'react';

const TaskChart = ({status, taskData}) => {
  if (status === 'waiting') {
    return <h2>Awaiting data...</h2>;
  } else if (status === 'chart') {
    const yVals = taskData.map((element) => {
      const heightOuter = 400 * element[3] / 600;
      const heightInner = 400 * element[4] / 600;
      const yInner = 450 - heightInner;
      const yOuter = 450 - heightOuter;
      const heightExtra = 400 * element[6] / 600;
      const yExtra = 450 - heightExtra - heightInner;
      const heightBorderExtra = 400 * (element[6] + element[4] - element[3]) / 600 - 3;
      const yBorderExtra = 450 - heightExtra - heightInner;
      return [heightOuter, heightInner, yOuter, yInner, heightExtra, yExtra, heightBorderExtra, yBorderExtra];
    }).reverse();

    const barRects = [];
    const horizontalTicks = [];
    const textLabels = [];
    const gridLines = [];
    const gridLabels = [];
    for (let i = 0; i < 7; i++) {
      barRects.push(<rect key={i} x={85 + i * 100} y={yVals[i][3]} width='50' height={yVals[i][1]} stroke='none' fill='hsl(40, 80%, 80%)' />);
      barRects.push(<rect key={i + 14} x={85 + i * 100} y={yVals[i][5]} width='50' height={yVals[i][4]} stroke='none' fill='hsl(240, 80%, 80%)' />);
      barRects.push(<rect key={i + 7} x={85 + i * 100} y={yVals[i][2]} width='50' height={yVals[i][0]} stroke='hsl(40, 80%, 30%)' strokeWidth='3px' fill='none' />);
      if (yVals[i][4] !== 0) {
        barRects.push(<rect key={i + 21} x={85 + i * 100} y={yVals[i][7]} width='50' height={yVals[i][6]} stroke='purple' strokeWidth='3px' fill='none' />);
      }
      horizontalTicks.push(<line key={i} x1={110 + i * 100} y1='450' x2={110 + i * 100} y2='460' stroke='black' />)
      textLabels.push(<text key={i} x={70 + i * 100} y='480' fill='black'>{taskData[6 - i][0]}</text>)
      gridLines.push(<line key={i} x1='10' y1={(i + 1) * 50} x2='810' y2={(i + 1) * 50} stroke='hsl(0, 0%, 80%)' />)
      gridLabels.push(<text key={i} x='20' y={(i + 2) * 50 - 2}>{(7 - i) * 75}</text>)
    }
    gridLines.push(<line key={8} x1='10' y1='400' x2='810' y2='400' stroke='hsl(0, 0%, 80%)' />)
    gridLabels.push(<text key={8} x='20' y='48' fontWeight='bold' fontSize='20px'>Time (minutes)</text>)

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

export default TaskChart;
