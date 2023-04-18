import React, { Component } from 'react';
import Form from './Form';
import Preview from './Preview';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      telephone: 0,
    };
  }

  // form preview modal

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }


  render() {
    return (
      <div className='App-header'>
        <Form
        name={this.state.name}
        email={this.state.email}
        telephone={this.state.telephone}
        handleChange={this.handleChange}
        />
        <Preview
        name={this.state.name}
        email={this.state.email}
        telephone={this.state.telephone}/>
      </div>
    )
  }
}


