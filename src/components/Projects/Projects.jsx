import React, { useState } from 'react';

import ProjectImagesList from './ProjectImagesList';

const INITIAL_PROJECTS = [
  {
    id: 'pi1',
    projectName: 'projectName',
    image: 'https://i.ibb.co/TYkLR9j/res1.jpg',
  },
  {
    id: 'pi2',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi3',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi4',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi5',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi6',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi7',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi8',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi9',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi10',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi11',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
  {
    id: 'pi12',
    projectName: 'projectName',
    image: 'http://via.placeholder.com/240x360',
  },
];
const Projects = () => {
  const [projectImages] = useState(INITIAL_PROJECTS);
  return (
    <section className='bg-white w-full md:w-3/4 mx-auto my-0'>
      <div className='text-black flex flex-col items-center py-8 gap-4'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-2'>PROJECTS</h1>
        <p className='text-center w-full md:w-3/4 mx-4 md:mx-0 px-4 md:px-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eveniet enim commodi, iusto nulla molestiae odit consequatur quod
          esse, magni laborum quasi! Dolores voluptas quaerat neque eos deleniti
          omnis enim!
        </p>
      </div>
      {projectImages.length > 0 && (
        <div className='mt-8 md:mt-12 my-0'>
          <ProjectImagesList images={projectImages} />
        </div>
      )}
    </section>
  );
};

export default Projects;
