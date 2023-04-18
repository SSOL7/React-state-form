import React from 'react'

function Preview(props) {
  return (
    <div>
        <h1>Preview</h1>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Telephone: {props.telephone}</p>
    </div>
  )
}

export default Preview