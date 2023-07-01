import React from 'react';

const ProjectImagesList = (props) => {
  return (
    <>
      <div className='w-full md:w-4/5 mx-auto'>
        <div className='gap-3 grid grid-cols-6 md:grid-cols-9 xl:grid-cols-12 pb-3 '>
          {props.images.map((item) => (
            <div className='p-1 col-span-3 object-contain' key={item.id}>
              <img src={`${item.image}`} alt='cloudinaryProjectLink' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectImagesList;
