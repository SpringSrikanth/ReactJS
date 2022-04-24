function Success({msg}){
  return <div>{msg}</div>
}

function Failure({msg}){
  return <div>{msg}</div>
}

function Validate({isLoggedIn}){
  if(isLoggedIn)
    return <Success msg="User Logged In Success fully !!!"/>
  return <Failure msg="User Logged In Failed !!!"/>
}

function App() {
  const isLoggedIn =true
  return (
    <div >
      <h4>React Conditional 4</h4>
      <Validate isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
