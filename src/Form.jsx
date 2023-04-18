import React from 'react'
import './App.css'

function Form(props) {

  return (
    <div className='form'>
        <h1>Form</h1>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={props.name} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={props.email} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form
