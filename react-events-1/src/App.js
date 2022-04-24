import { useState } from "react";

function App() {
  const [message, setMessage] =useState("Click on any button to perform event");
  function login(){
    setMessage("Login Successfully");
  }
  function logout(){
    setMessage("Logout Successfully");
  }
  return (
    <div className="container">
      <h1>App Component</h1>
      <h2>{message}</h2>
      <div className="row mt-3">
        <button onClick={login} className="btn btn-primary col-md-1 m-1">Login</button>
        <button onClick={logout} className="btn btn-danger col-md-1 m-1">Logout</button>
      </div>
    </div>
  );
}

export default App;
