import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';

function App() {
  const navigate = useNavigate();

  //the page will be routed to blog page after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      navigate("/blogs");
    }, 5000);
  }, [navigate]);

  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
}

export default App;
