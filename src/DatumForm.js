import React from 'react';

class DatumForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  handleClick(event) {
    if(this.state.text) {
      this.props.clickFunction(this.props.data, this.state.text);
    }
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="data-form-box">
        <label>{this.props.label}:</label>
        <input onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default DatumForm;
