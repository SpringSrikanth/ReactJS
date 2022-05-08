import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
  return (
      <ul className="nav nav-tabs mt-3">
          <li className="nav-item">
              <Link className="nav-link" to="/blogs/public">Public Blogs</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/blogs/categories/published">Published Blogs</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/blogs/categories/not-published">Not Published Blogs</Link>
          </li>
      </ul>
  )
}

export default NavTabs;