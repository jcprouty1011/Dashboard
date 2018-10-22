import React from 'react';
import TaskTable from './TaskTable';

class TaskDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'table',
      taskData: []
    };
  }

  componentDidMount() {
    //Retrieve data from server
    fetch('http://localhost:3001/weektaskdata').then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Server sent a bad response.")
      }
    }, error => {
      console.log("Could not get the task data.")
    }).then(jsonResponse => {
      this.setState({taskData: jsonResponse.taskData});
    });

    //TEST CODE
    //this.setState({taskData: [["Today", 2, 1, 20, 10], ["Yesterday", 3, 2, 30, 20]]});
  }

  render() {
    return <TaskTable status={this.state.status} taskData={this.state.taskData} />;
  }
}

export default TaskDisplay;
