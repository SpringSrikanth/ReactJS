import React from 'react';
import {  Outlet} from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <div className='container-fluid mt-3'>
        <Outlet/>
      </div>
    </React.Fragment>
  );
}

export default App;
