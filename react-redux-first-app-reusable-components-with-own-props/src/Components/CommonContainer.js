import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../Redux/Todos';
import { addBook, buyBook } from '../Redux/Books';


function CommonContainer({todos,itemState,removeOrBuy,addTodoOrBook}) {
  const title= todos ?  'Todos' :'Books';
  const buttonText =  todos ?  'Remove Todo' :'Buy Book';
  const [count,setCount] = useState(0)
  return (
    <div className='container m-2'>
        <h6 className='m-2'>Number Of {title} - {itemState}</h6>
        <input type="number" className='form-control form-control-sm m-2' value={count} onChange={(e)=> setCount(e.target.value)}/>
        <div className='row m-2'>
            <button className='btn btn-primary m-2 col-md-2' onClick={()=>{addTodoOrBook(count)}}> Add {title} {count}</button>
            <button className='btn btn-danger m-2 col-md-2' onClick={removeOrBuy}>{buttonText}</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.todos ? state.todos.numberOfTodos : state.books.numberOfBooks
    return {
        itemState
    };
}

const mapDispatchToProps = (dispatch,ownProps) => {
    const  dispatchRemoveOrBuy = ownProps.todos ? () => dispatch(removeTodo()) : ()=> dispatch(buyBook())
    const  dispatchAddTodoOrBook =ownProps.todos ? (count)=> dispatch(addTodo(count)) : (count)=> dispatch(addBook(count))
    return {
        removeOrBuy: dispatchRemoveOrBuy,
        addTodoOrBook: dispatchAddTodoOrBook
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommonContainer)