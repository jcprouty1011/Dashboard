import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DatumForm from './DatumForm';

class DataEntryArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {waiting: true};
    this.sendDataToDB = this.sendDataToDB.bind(this);
  }

  componentDidMount() {
    this.updateDataNeeded();
  }

  updateDataNeeded() {
    fetch('http://localhost:3001/generaldatatypes').then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Could not get data types.');
      }
    }).then(jsonResponse => {
      console.log(jsonResponse)
      this.setState({waiting: false,
        dataTypes: jsonResponse});
    });
  }

  sendDataToDB(dataType, datum) {
    console.log(`Sending ${datum} to the ${dataType} column for today.`);
    const initObject = {method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({dbKey: dataType, value: datum})
    };
    fetch('http://localhost:3001/postdatum', initObject).then(res => {
      this.updateDataNeeded();
    }).catch(error => {
      console.log(error.message)
    });
  }

  render() {

    if (this.state.waiting) {
      return <h2>Awaiting data...</h2>;
    }

    const datumForms = this.state.dataTypes.map((row, i) =>
      (
        <CSSTransition key={row.data} classNames="example" timeout={{ enter: 500, exit: 500 }}>
          <DatumForm key={row.data} data={row.data} label={row.label} clickFunction={this.sendDataToDB} />
        </CSSTransition>
      )
    );

    if (!datumForms[0]) {
      return <h3>All data logged today</h3>;
    }

    return (
      <TransitionGroup className="data-entry">
        {datumForms}
      </TransitionGroup>
    );
  }
}

export default DataEntryArea;
