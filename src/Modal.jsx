import React from 'react'
import classes from './Modal.module.css'

function Modal(props) {
  return (
    <div>
        <h1>Modal</h1>
        <p>Name: {props.name}</p>
        <p>Email: {props.lastname}</p>
        <p>Telephone: {props.role}</p>
        <p>Role: {props.telephone}</p>
        <button onClick={props.modalHandler} >Yes</button>
        <button onClick={props.closemodalHandler} className='no-button'>No</button>
    </div>
  )
}

export default Modal