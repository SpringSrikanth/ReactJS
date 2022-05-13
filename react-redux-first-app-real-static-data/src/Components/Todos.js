import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../Redux/Todos';

function Todos({todoState,removeTodo}) {
  const {todos,numberOfTodos} = todoState
  return (
    <div className='container'>
        <div className='row'>
            <h2>Number Of Todos - {numberOfTodos}</h2>
            <ul className="list-group col-md-8">
                    {todos.map(todo => (
                        <li key={todo.id} className="list-group-item p-3">
                            <h3>Name : {todo.name}</h3>
                            <p>Description :{todo.description}</p>
                            <p>{todo.createdBy}</p>
                            <button className='btn btn-primary' onClick={()=>removeTodo(todo.id)}>Remove Todo</button>
                        </li>
                    ))}
            </ul>
        </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        todoState : state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id)=> dispatch(removeTodo(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)