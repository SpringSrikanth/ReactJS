import { useReducer } from "react";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const initialState ={
  counter:0
}

function reducer(state,action){
  switch (action.type) {
    case INCREMENT:
      return {...state , counter: state.counter + 1 }
    case DECREMENT:
      return {...state , counter: state.counter - 1 }
    default:
      return state;
  }
}


function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  function increment(){
    dispatch({type:INCREMENT, info:'Incrementing the couter value'})
  }
  
  function decrement(){
    dispatch({type:DECREMENT, info:'Decrementing the couter value'})
  }
  return (
    <div className="container">
      <h1>Use Reducer Example</h1>
      <div className='row'>
        <button className="btn btn-primary col-md-1 m-2" onClick={increment}>Increment</button>
        <button className="btn btn-danger col-md-1 m-2" onClick={decrement}>Decrement</button>
      </div>
      <div>
        <h1> Counter Value {state.counter}</h1>
      </div>
    </div>
  );
}

export default App;
