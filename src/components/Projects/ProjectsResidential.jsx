import React, { useState } from 'react';

import ProjectImagesList from './ProjectImagesList';

const RESIDENTIAL_PROJECTS = [
  {
    id: 'pi1',
    projectName: 'projectName',
    image: 'https://i.ibb.co/TYkLR9j/res1.jpg',
  },
  // {
  //   id: 'pi2',
  //   projectName: 'projectName',
  //   image: 'https://i.ibb.co/KsgHWcv/res2.jpg',
  // },
  {
    id: 'pi3',
    projectName: 'projectName',
    image: 'https://i.ibb.co/s2Ntq8s/res3.jpg',
  },
  {
    id: 'pi4',
    projectName: 'projectName',
    image: 'https://i.ibb.co/qWbLDyR/res4.jpg',
  },
  {
    id: 'pi5',
    projectName: 'projectName',
    image: 'https://i.ibb.co/26nCHcp/res5.jpg',
  },
  {
    id: 'pi6',
    projectName: 'projectName',
    image: 'https://i.ibb.co/nwF84zw/res6.jpg',
  },
  {
    id: 'pi7',
    projectName: 'projectName',
    image: 'https://i.ibb.co/DkVhkpZ/res7.jpg',
  },
  {
    id: 'pi8',
    projectName: 'projectName',
    image: 'https://i.ibb.co/sC2q5BK/res8.jpg',
  },
  {
    id: 'pi9',
    projectName: 'projectName',
    image: 'https://i.ibb.co/Sd1tfqM/res9.jpg',
  },
  {
    id: 'pi10',
    projectName: 'projectName',
    image: 'https://i.ibb.co/WkcwDF4/res10.jpg',
  },
];

const ProjectsResidential = (props) => {
  const [projectImages] = useState(RESIDENTIAL_PROJECTS);

  return (
    <>
      <div className='grid grid-cols-4  w-full md:w-4/5 mx-auto'>
        <h1 className='col-span-4 md:col-span-2 text-3xl md:text-5xl font-extrabold flex items-center justify-center md:justify-start'>
          RESIDENTIAL
        </h1>
        <div className='col-span-4 md:col-span-2 flex justify-center md:justify-end'>
          <button
            onClick={props.onClick}
            className='px-8 py-4 border-none rounded-md shadow-md shadow-slate-800 hover:bg-black  bg-zinc-700 text-white'
          >
            See Commercial
          </button>
        </div>
      </div>
      {projectImages.length > 0 && (
        <div className='mt-8 md:mt-12 my-0 pb-8'>
          <ProjectImagesList images={projectImages} />
        </div>
      )}
    </>
  );
};

export default ProjectsResidential;
