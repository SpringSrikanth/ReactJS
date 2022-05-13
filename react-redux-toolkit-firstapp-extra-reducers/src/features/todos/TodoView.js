import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, addTodos, publishedTodo } from './TodoSlice';

function TodoView() {
  const numberOfTodos = useSelector(state => state.todos.numberOfTodos)
  const dispatch = useDispatch();
  const [count, setCount] = useState(0)
  return (
    <div className='container-fluid mt-3'>
      <div className='row mt-3'>
        <h4 className='col-md-4'>Number of todos {numberOfTodos}</h4>
        <div className='col-md-2'>
          <button className='btn btn-primary' onClick={() => dispatch(removeTodo())}>Remove Todo</button>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-4'>
          <input
            type="number"
            className='form-control form-control-sm'
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
        </div>
        <div className='col-md-2'>
          <button className='btn btn-primary' onClick={() => dispatch(addTodos(count))} disabled={count <= 0} >Add Todos ({count})</button>
        </div>
      </div>
      <div className='row mt-3'>
          <h6>Note: If you click on Publish Todo button The Todo will be published in the form of blogs with help of todo reducers.</h6>
          <button className='btn btn-primary col-md-1 m-3' onClick={()=> dispatch(publishedTodo(1))}>Publish Todo</button>
      </div>
    </div>
  )
}

export default TodoView