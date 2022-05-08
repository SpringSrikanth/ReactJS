import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Redux/Todos';

function Todos() {
  const todoState = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <div className='container mt-3'>
        <h6>Number Of Todos - {todoState.numberOfTodos}</h6>
        <button className='btn btn-primary' onClick={()=> dispatch(removeTodo())}>Remove Todo</button>
    </div>
  )
}
export default Todos