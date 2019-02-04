import React from 'react';

const TaskTable = (props) => {
  if (this.props.status === 'waiting') {
    return <h2>Awaiting data...</h2>;
  } else if (this.props.status === 'table') {
    const tableArray = [];
    for (let i = 0; i < this.props.taskData.length; i++) {
      tableArray.push(
        (
          <tr key={this.props.taskData[i][0]}>
            <th>{this.props.taskData[i][0]}</th>
            <th>{this.props.taskData[i][1]}</th>
            <th>{this.props.taskData[i][2]}</th>
            <th>{this.props.taskData[i][3]}</th>
            <th>{this.props.taskData[i][4]}</th>
          </tr>
        )
      );
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Tasks Assigned</th>
              <th>Tasks Completed</th>
              <th>Time assigned</th>
              <th>Time completed</th>
            </tr>
          </thead>
          <tbody>
            {tableArray}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskTable;
