import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../Redux';

function Todos(props) {
  return (
    <div>
        <h5>Number Of Todos - {props.numberOfTodos}</h5>
        <button className='btn btn-primary' onClick={props.removeTodo}>Remove Todo</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        numberOfTodos : state.numberOfTodos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: ()=> dispatch(removeTodo())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)