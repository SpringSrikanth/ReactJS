import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/blogs/published">Published</Link></li>
        <li><Link to="/blogs/not-pulbished">Not Pulbished</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Blogs