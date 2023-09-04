import React, { useState } from 'react';

import ProjectImagesList from './ProjectImagesList';

const COMMERCIAL_PROJECTS = [
  {
    id: 'pi1',
    projectName: 'projectName',
    image: 'https://i.ibb.co/ZT5HQmc/comm1.jpg',
  },
  {
    id: 'pi2',
    projectName: 'projectName',
    image: 'https://i.ibb.co/X8bXbPc/comm2.jpg',
  },
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
      <div className='grid grid-cols-4 w-full md:w-4/5 mx-auto'>
        <h1 className='col-span-4 md:col-span-2 text-3xl md:text-5xl font-extrabold flex items-center justify-center md:justify-start'>
          COMMERCIAL
        </h1>
        <div className='col-span-4 md:col-span-2 flex justify-center md:justify-end'>
          <button
            onClick={props.onClick}
            className='px-8 py-4 border-none rounded-md shadow-md shadow-slate-800 hover:bg-black  bg-zinc-700 text-white'
          >
            See Residential
          </button>
        </div>
      </div>

      {projectImages.length > 0 && (
        <div className='col-span-2 mt-8 md:mt-12 my-0'>
          <ProjectImagesList images={projectImages} />
        </div>
      )}
    </>
  );
};

export default ProjectsCommercial;
