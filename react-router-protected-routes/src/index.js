import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blogs from './Components/Blogs';
import PublicBlogs from './Components/PublicBlogs';
import CategoryBlogs from './Components/CategoryBlogs';
import AuthGuard from './Guards/AuthGuard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>

          <Route path='/blogs' element={<AuthGuard><Blogs/></AuthGuard>}>
            <Route index element={<PublicBlogs/>}/>
            <Route path="public" element={<PublicBlogs/>}/>
            <Route path="categories/:category" element={<CategoryBlogs/>}/>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
