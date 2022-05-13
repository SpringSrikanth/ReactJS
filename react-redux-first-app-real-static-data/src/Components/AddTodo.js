import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../Redux/Todos'

function AddTodo({addTodo}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const submit = (e) =>{
    e.preventDefault();
    addTodo({name,description,createdBy});
    setName('')
    setDescription('')
    setCreatedBy('')
  }

  return (
    <form className='form'>
      <h1>Adding a todo</h1>
      <div className='row mt-3'>
        <label htmlFor='name' className='col-md-6'>Name :</label>
        <input type="text"
          id='name'
          className='form-control form-control-sm col-md-6'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='row mt-3'>
        <label htmlFor='description' className='col-md-6'>Description :</label>
        <input type="text"
          id='description'
          className='form-control form-control-sm col-md-6'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='row mt-3'>
        <label htmlFor='createdBy' className='col-md-6'>Created By :</label>
        <input type="text"
          id='createdBy'
          className='form-control form-control-sm col-md-6'
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
        />
      </div>
      <button className='btn btn-primary mt-3' onClick={submit} disabled={!(name && description && createdBy)}>Add Todo</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo: (count)=> dispatch(addTodo(count))
    }
}

export default connect(null,mapDispatchToProps)(AddTodo);