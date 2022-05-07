import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../Redux/Todos';

function Todos(props) {
  return (
    <div className='container'>
        <h5>Author: {props.author}</h5>
        <h6>Number Of Todos - {props.numberOfTodos}</h6>
        <button className='btn btn-primary' onClick={props.removeTodo}>Remove Todo</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        numberOfTodos : state.todos.numberOfTodos,
        author: state.todos.author
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: ()=> dispatch(removeTodo())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)