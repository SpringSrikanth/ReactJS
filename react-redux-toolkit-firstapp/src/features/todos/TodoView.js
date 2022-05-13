import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './TodoSlice';

function TodoView() {
  const numberOfTodos = useSelector(state=>state.todos.numberOfTodos)
  const dispatch = useDispatch();
  return (
    <div>
        <h4>Number of todos {numberOfTodos}</h4>
        <button className='btn btn-primary' onClick={()=>dispatch(removeTodo())}>Remove Todo</button>
    </div>
  )
}

export default TodoView