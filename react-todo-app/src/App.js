import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

const todosList=[
  {
    id:1,
    title:"Todo 1",
    description:"Todo 1 Description"
  },
  {
    id:2,
    title:"Todo 2",
    description:"Todo 2 Description"
  },
  {
    id:3,
    title:"Todo 3",
    description:"Todo 3 Description"
  },
  {
    id:4,
    title:"Todo 4",
    description:"Todo 4 Description"
  },
  {
    id:5,
    title:"Todo 5",
    description:"Todo 5 Description"
  }
]

function App() {
  const [todos,setTodos] = useState([...todosList])
  const handleSubmit=(e)=>{
    e.preventDefault();
    setTodos([
      ...todos, 
    {
      id: todos.length+1,
      title: todoName,
      description
    }])

    reset();
  }

  const [todoName,setTodoName] = useState("");
  const [description,setDescription] = useState("");
  
  function reset(){
    setTodoName("")
    setDescription("")
  }

  function deleteTodo(id){
    const filteredTodos =todos.filter(todo=> todo.id != id)
    setTodos(filteredTodos);
  }

  return (
    <div className="container mt-3">
      <form action="" className='form' onSubmit={handleSubmit}> 
        <h4>Add Todo</h4>
        <div className='row mt-3'>
          <label className='label col-md-2'>Enter Todo Name</label>
          <input 
            type="text" 
            style={{ width: "50%" }} 
            className='form-control' 
            placeholder='Enter Todo Name'
            value={todoName}
            onChange={(e)=> setTodoName(e.target.value)}
          />
        </div>
        <div className='row mt-3'>
          <label className='label col-md-2'>Enter Todo Description</label>
          <textarea
            rows="5" 
            cols="5"
            style={{ width: "50%" }} 
            className='form-control' 
            placeholder='Enter Todo Description'
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
           > </textarea>
        </div>
        <div className='row mt-3'>
        <button type='submit' className='btn btn-primary col-md-1 m-2'>Submit</button>
        <button type='button' onClick={reset} className='btn btn-light col-md-1 m-2'>Clear</button>
        </div>
      </form>

      <div className='row mt-3'>
        <h4>My Todos</h4>
        <div className='col-md-8'>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
