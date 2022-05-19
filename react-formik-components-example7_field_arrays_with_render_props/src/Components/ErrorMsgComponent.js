import React from 'react'

function ErrorMsgComponent({errorMessage}) {
  return (
    <div className='text-danger'>
        { errorMessage ? errorMessage: 'Required!!' }
    </div>
  )
}

export default ErrorMsgComponent