import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeBlog } from './BlogSlice';

function BlogView() {
  const numberOfBlogs = useSelector(state=> state.blogs.numberOfBlogs)
  const dispatch = useDispatch();
  return (
    <div>
        <h4>Number of Blogs - {numberOfBlogs}</h4>
        <button className='btn btn-primary' onClick={()=>dispatch(removeBlog())}> Remove Blog</button>
    </div>
  )
}

export default BlogView;