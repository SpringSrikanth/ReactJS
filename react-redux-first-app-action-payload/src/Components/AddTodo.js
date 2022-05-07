import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../Redux/Todos'

function AddTodo({addTodo}) {
  const [count, setCount] = useState(0);
  return (
    <div className='container'>
        <h1>Adding a todo</h1>
        <input type="number" className='form-control form-control-sm' value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button className='btn btn-primary' onClick={()=> addTodo(count)}>Add Todo</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addTodo: (count)=> dispatch(addTodo(count))
    }
}

export default connect(null,mapDispatchToProps)(AddTodo);