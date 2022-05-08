import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyBook } from '../Redux/Books'

function Books() {
    const bookState = useSelector(state=> state.books);
    const dispatch = useDispatch();
  return (
    <div className='container mt-3'>
        <h6> Number of Books {bookState.numberOfBooks}</h6>
        <button className='btn btn-primary' onClick={()=>dispatch(buyBook())}>Buy Book</button>
    </div>
  )
}

export default Books;
