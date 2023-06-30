import React from 'react'

const ProjectImagesList = (props) => {
  return (
    <>
      <div className='w-full md:w-4/5 mx-auto'>
        <ul className='list-none flex gap-3 flex-row flex-wrap justify-center pb-3 md:pb-8 px-3'>
          {props.images.map((item) => (
            <li
              className='m-0 p-1 border-2 border-black bg-black rounded-md'
              key={item.id}
            >
              <img
                className='rounded-md'
                src={`${item.image}`}
                alt='cloudinaryProjectLink'
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProjectImagesList
