import React, { Component } from 'react'
import Modal from './Modal'
import Preview from './Preview'
import Form from './Form'

import './App.css'

export default class App extends Component {
  state = {
    modal: true,
    note: {
      name: '',
      email: '',
      phone: '',
      role: '',
    }
  }

  // create new application, clean it. make a speed game based. App is a class component that holds state. 

modalHandler = (e) => {
  e.preventDefault();
  console.log('modalHandler');

  this.setState({
    modal: !this.state.modal
  })
  }

  closemodalHandler = () => {
    console.log('closemodalHandler');
    this.setState({
      modal: false 
    })
  }

  inputhandler = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: {... this.state.note, [e.target.name]: e.target.value}
    })
  }

  render() {
    return (
      <div className='App-header'>
        <input type="text" value={this.state.value} onChange={this.inputhandler} />
        <Form submit={this.modalHandler} onChange={this.inputhandler}/>

        <Preview
        name={this.state.name}
        email={this.state.email}
        phone={this.state.phone}
        role={this.state.role}
        />

        {this.state.modal &&
        <Modal
        modalHandler={this.modalHandler}
        closemodalHandler={this.closemodalHandler}
        name={this.state.name}
        email={this.state.email}
        phone={this.state.phone}
        role={this.state.role}
        />}
      </div>
    )
  }
}

