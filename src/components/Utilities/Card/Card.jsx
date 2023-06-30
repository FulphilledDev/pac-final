import React from 'react'

const Card = (props) => {
  return (
    <div className='h-full md:h-1/2 w-full md:w-4/5 mx-auto border-2 border-black bg-black rounded-lg shadow-2xl py-3 px-1 md:px-2'>
      {props.children}
    </div>
  )
}

export default Card
