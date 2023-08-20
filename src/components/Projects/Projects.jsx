import React, { useState } from 'react';

import ProjectsResidential from './ProjectsResidential';
import ProjectsCommercial from './ProjectsCommercial';

const Projects = () => {
  const [showRes, setShowRes] = useState(true);
  const [showCom, setShowCom] = useState(false);

  function toggleProjects() {
    if (showRes === true) {
      setShowRes(false);
      setShowCom(true);
    } else {
      setShowRes(true);
      setShowCom(false);
    }
  }
  return (
    <section className='bg-white w-full md:w-3/4 mx-auto my-0'>
      <div className='text-black flex flex-col items-center py-8 gap-4'>
        <h1 className=' font-extrabold'>OUR PROJECTS</h1>
        <p className=' w-full md:w-3/4 mx-4 md:mx-0 px-4 md:px-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eveniet enim commodi, iusto nulla molestiae odit consequatur quod
          esse, magni laborum quasi! Dolores voluptas quaerat neque eos deleniti
          omnis enim!
        </p>
      </div>
      {showRes && <ProjectsResidential onClick={toggleProjects} />}
      {showCom && <ProjectsCommercial onClick={toggleProjects} />}
    </section>
  );
};

export default Projects;
