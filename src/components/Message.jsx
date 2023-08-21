import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div>
        <h3 className='message'>{message}</h3>
    </div>
  )
}

export default ErrorMessage