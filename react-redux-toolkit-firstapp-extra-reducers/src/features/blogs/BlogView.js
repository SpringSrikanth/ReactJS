import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBlogs, removeBlog } from './BlogSlice';

function BlogView() {
  const numberOfBlogs = useSelector(state=> state.blogs.numberOfBlogs)
  const dispatch = useDispatch();
  const [count,setCount] = useState(0);
  return (
    <div className='container-fluid mt-3'>
      <div className='row mt-3'>
        <div className='col-md-4'>
          <h4>Number of Blogs - {numberOfBlogs}</h4>
        </div>
        <div className='col-md-2'>
          <button className='btn btn-primary' onClick={() => dispatch(removeBlog())}> Remove Blog</button>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-4'>
          <input
            className='form-control form-control-sm'
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        <div className='col-md-2'>
          <button className='btn btn-primary' onClick={() => dispatch(addBlogs(parseInt(count)))} disabled={count <= 0}> Add Blogs ({count})</button>
        </div>
      </div>
    </div>
  )
}

export default BlogView;