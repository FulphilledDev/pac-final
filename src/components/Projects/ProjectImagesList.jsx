import React from 'react';

const ProjectImagesList = (props) => {
  return (
    <>
      <div className='w-full md:w-4/5 mx-auto'>
        <div className='gap-3 grid grid-cols-6 md:grid-cols-8 xl:grid-cols-12 pb-3 '>
          {props.images.map((item) => (
            <div
              className='col-span-3 md:col-span-4 flex flex-row justify-center p-1'
              key={item.id}
            >
              <img
                src={`${item.image}`}
                style={{ minHeight: '250px', minWidth: '250px' }}
                className='rounded-md shadow-md shadow-slate-700'
                alt='cloudinaryProjectLink'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectImagesList;
