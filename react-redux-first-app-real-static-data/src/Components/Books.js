import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyBook } from '../Redux/Books'

function Books({bookState,buyBook}) {
  const {numberOfBooks,books} = bookState;
  const [quantity,setQuantity] = useState(0);
  const buyBookByQuantity = (id,book,bookQuantity) =>{
    buyBook({id, book:{...book, quantity:book.quantity-bookQuantity}})
  }
  return (
    <div className='container'>
        <h5> Number of Books {numberOfBooks}</h5>
        <ul className='list-group col-md-4' style={{display:"flex", flexDirection:"row" ,flexWrap:"wrap"}}>
            {books.map(book=>(
                <li key={book.id} className="list-group-item p-3 m-3" style={{border:"1px solid gray" , borderRadius:"8px"}}>
                    <h4>{book.name} by {book.author}</h4>
                    <img src={book.image} alt={book.name} width="auto" height="auto"/>

                    <p>Total {book.quantity} units</p>
                    <p>Price {book.price}</p>
                    <input type="number" className='form-control form-control-sm col-md-2 mb-2 mt-2' style={{width:"100px"}} value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
                    <button 
                        className='btn btn-primary' 
                        onClick = {()=>buyBookByQuantity(book.id , book,quantity)}
                        disabled = {quantity <= 0}
                    >Buy Book</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        bookState : state.books
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyBook :(value)=> dispatch(buyBook(value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Books)