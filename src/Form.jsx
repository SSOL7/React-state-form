import React from 'react'
import classes from './Form.module.css'
import Preview from './Preview'

function Form(props) {

  return (
    <div className='form'>
        <h1>Form</h1>
    <form onSubmit={props.submit} className={classes.form}  >
            <label htmlFor='name' >Name</label>
            <input type='text' name='name' value={props.name}/>

            <label htmlFor='lastname' >Last name</label>
            <input type='text' name='email' value={props.lastName} />

            <label htmlFor='telephone' >Telephone</label>
            <input type='text' name='telephone' value={props.telephone} onChange={props.handleChange} />

            <label>Role</label>
            <select name="role" id="role">
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
            </select>

        <button className='submit-button' onClick={props.modalHandler} type='submit'>Submit</button>
    </form>

    <Preview name={props.name} email={props.email} phone={props.phone} role={props.role} />
    </div>
  )
}

export default Form
