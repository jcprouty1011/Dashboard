import React from 'react';
import DatumForm from './DatumForm';

class DataEntry extends React.Component {

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

    const datumForms = this.state.dataTypes.map((row) => {
      return <DatumForm key={row.data} data={row.data} label={row.label} clickFunction={this.sendDataToDB} />
    });

    if (!datumForms[0]) {
      return <h3>All data logged today</h3>;
    }

    return (
      <div className="data-entry">
        {datumForms}
      </div>
    );
  }
}

export default DataEntry;
