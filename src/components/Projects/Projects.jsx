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
        <p className='text-center w-full md:w-3/4 mx-4 md:mx-0 px-4 md:px-0 uppercase'>
          Efficient. Clean. Durable.
        </p>
      </div>
      {showRes && <ProjectsResidential onClick={toggleProjects} />}
      {showCom && <ProjectsCommercial onClick={toggleProjects} />}
    </section>
  );
};

export default Projects;
