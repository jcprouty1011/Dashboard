import React from 'react';
import TaskTable from './TaskTable';
import TaskChart from './TaskChart';

class TaskScoreDisplayArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'waiting',
      taskData: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/weektaskdata').then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Server sent a bad response.")
      }
    }, error => {
      console.log("Could not get the task data for Task Display Area.")
    }).then(jsonResponse => {
      this.setState({status: 'chart', taskData: jsonResponse.taskData});
    });

  }

  render() {
    return <TaskChart status={this.state.status} taskData={this.state.taskData} />;
  }
}

export default TaskScoreDisplayArea;
