import React from 'react'
import classes from './Preview.module.css'

function Preview(props) {
    console.log(props)
  return (
    <div classes={classes.preview}>
        <h1>Preview</h1>
        <p>name{props.name}</p>
        <p>email{props.email}</p>
        <p>phone{props.phone}</p>
        <p>role{props.role}</p>
    </div>
  )
}

export default Preview