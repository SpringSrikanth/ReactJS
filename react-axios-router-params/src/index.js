import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import About from './Components/About';
import Home from './Components/Home';
import BlogList from './Components/BlogList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<App />} >
          <Route path='/' exact element={<Home/>}/>
          <Route path='users' exact element={<Users />} />
          <Route path='user/:userId' exact element={<UserDetails />} />
          <Route path='about' exact element={<About />} />
          <Route path='blogs' exact element={<BlogList />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
