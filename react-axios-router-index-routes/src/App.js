import {  Outlet} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <div className='container-fluid mt-3'>
        <Outlet/>
      </div>
    </>
  );
}

export default App;
