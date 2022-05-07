import React from 'react'
import { connect } from 'react-redux'
import { buyBook } from '../Redux/Books'

function Books(props) {
  return (
    <div className='container'>
        <h5> Number of Books {props.numberOfBooks}</h5>
        <button className='btn btn-primary' onClick={props.buyBook}>Buy Book</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        numberOfBooks : state.books.numberOfBooks
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyBook :()=> dispatch(buyBook())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Books)