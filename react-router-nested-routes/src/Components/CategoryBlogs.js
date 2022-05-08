import React from 'react'
import { useParams } from 'react-router-dom'

function CategoryBlogs() {
  const { category }= useParams();
  const title =category ==='published' ? "Published Blogs" :"Not Published Blogs";
  return (
    <div className='m-3'>
        <h4>{title}</h4>
    </div>
  )
}

export default CategoryBlogs