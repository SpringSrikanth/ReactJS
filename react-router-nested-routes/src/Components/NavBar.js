import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
              <Link className="navbar-brand" to="/" >Navbar</Link>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link className="nav-link" to="home">Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="blogs">Blogs</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="about">About Us</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default NavBar;