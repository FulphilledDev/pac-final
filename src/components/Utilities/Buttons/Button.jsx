import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-800 duration-500 shadow-md'>
      {props.children}
    </button>
  )
}

export default Button
