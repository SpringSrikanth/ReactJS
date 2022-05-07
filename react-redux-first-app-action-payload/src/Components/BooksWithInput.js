import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyBookByQuantity } from '../Redux/Books'

function BooksWithInput({numberOfBooks,buyBookByQuantity}) {
  const [count,setCount] = useState(0);
  return (
    <div className='container'>
        <h1>Number of Books {numberOfBooks} </h1>
        <input type="number" className='form-control form-control-sm' value={count} onChange={(e)=> setCount(e.target.value)}/>
        <button className='btn btn-primary' onClick={()=>buyBookByQuantity(count)}>Buy Book</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return {
        numberOfBooks : state.numberOfBooks
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyBookByQuantity: (count)=>{dispatch(buyBookByQuantity(count))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BooksWithInput);