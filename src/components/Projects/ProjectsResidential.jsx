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
      <div className='flex justify-between w-full md:w-4/5 mx-auto'>
        <h1 className='text-3xl md:text-5xl font-extrabold flex items-center justify-start'>
          RESIDENTIAL
        </h1>
        <div>
          <button
            onClick={props.onClick}
            className='flex flex-row items-center px-8 py-4 border-none rounded-md shadow-md shadow-slate-800 hover:bg-black  bg-zinc-700 text-white'
          >
            See Commercial Projects
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
