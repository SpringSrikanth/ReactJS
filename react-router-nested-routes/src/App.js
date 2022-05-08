import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
}

export default App;
