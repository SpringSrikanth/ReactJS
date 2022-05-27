import React from 'react'

function CustomErrorMessage(props) {
  return (
    <h6 className='text-danger'>
        {props.children}
    </h6>
  )
}

export default CustomErrorMessage