import React, { useState } from 'react';

import ProjectImagesList from './ProjectImagesList';

const COMMERCIAL_PROJECTS = [
  {
    id: 'pi1',
    projectName: 'projectName',
    image: 'https://i.ibb.co/ZT5HQmc/comm1.jpg',
  },
  // {
  //   id: 'pi2',
  //   projectName: 'projectName',
  //   image: 'https://i.ibb.co/X8bXbPc/comm2.jpg',
  // },
  {
    id: 'pi3',
    projectName: 'projectName',
    image: 'https://i.ibb.co/fHPxXcg/comm3.jpg',
  },
  {
    id: 'pi4',
    projectName: 'projectName',
    image: 'https://i.ibb.co/XyF8jqS/comm4.jpg',
  },
  {
    id: 'pi5',
    projectName: 'projectName',
    image: 'https://i.ibb.co/8BRH7gM/comm5.jpg',
  },
  {
    id: 'pi6',
    projectName: 'projectName',
    image: 'https://i.ibb.co/10PxcD2/comm6.jpg',
  },
  {
    id: 'pi7',
    projectName: 'projectName',
    image: 'https://i.ibb.co/hszjGQv/comm7.jpg',
  },
  {
    id: 'pi8',
    projectName: 'projectName',
    image: 'https://i.ibb.co/vBdL2Tw/comm8.jpg',
  },
  {
    id: 'pi9',
    projectName: 'projectName',
    image: 'https://i.ibb.co/MR6H2BD/comm9.jpg',
  },
  {
    id: 'pi10',
    projectName: 'projectName',
    image: 'https://i.ibb.co/sgDBv4M/comm10.jpg',
  },
];
const ProjectsCommercial = (props) => {
  const [projectImages] = useState(COMMERCIAL_PROJECTS);
  return (
    <>
      <div className='flex justify-between w-full md:w-4/5 mx-auto'>
        <h1 className='text-3xl md:text-5xl font-extrabold flex items-center justify-start'>
          COMMERCIAL
        </h1>
        <div>
          <button
            onClick={props.onClick}
            className='flex flex-row items-center px-8 py-4 border-none rounded-md shadow-md shadow-slate-800 hover:bg-black  bg-zinc-700 text-white'
          >
            See Residential Projects
          </button>
        </div>
      </div>

      {projectImages.length > 0 && (
        <div className='mt-8 md:mt-12 my-0'>
          <ProjectImagesList images={projectImages} />
        </div>
      )}
    </>
  );
};

export default ProjectsCommercial;
