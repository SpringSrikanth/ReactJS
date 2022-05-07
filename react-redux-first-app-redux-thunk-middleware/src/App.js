import './App.css';
import UserDetails from './Components/UserDetails';
import Users from './Components/Users';

function App() {
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <h1>Redux Thunk example</h1>
      <div className='row'>
        <div className="col-md-7">
          <Users />
        </div>
        <div className="col-md-4">
          <UserDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
