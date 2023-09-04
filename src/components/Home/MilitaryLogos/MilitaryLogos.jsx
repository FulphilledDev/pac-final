import React from 'react';

import './MilitaryLogos.css';

import AirForce from '../../../assets/images/deptAirForce.png';
import Army from '../../../assets/images/deptArmy.png';
import Navy from '../../../assets/images/deptNavy.png';
import CoastGuard from '../../../assets/images/usCoastGuard.png';
import Marines from '../../../assets/images/deptNavyUSMarineCorps.png';

const MilitaryLogos = () => {
  return (
    <div className='flex flex-wrap md:flex-row justify-around gap-2 mx-auto px-4 md:px-0 w-full md:w-3/4'>
      <img
        className='w-24 h-24 lg:w-32 lg:h-32'
        src={AirForce}
        alt='militaryBranch'
      />
      <img
        className='w-24 h-24 lg:w-32 lg:h-32'
        src={Army}
        alt='militaryBranch'
      />
      <img
        className='w-24 h-24 lg:w-32 lg:h-32'
        src={Navy}
        alt='militaryBranch'
      />
      <img
        className='w-24 h-24 lg:w-32 lg:h-32'
        src={CoastGuard}
        alt='militaryBranch'
      />
      <img
        className='w-24 h-24 lg:w-32 lg:h-32'
        src={Marines}
        alt='militaryBranch'
      />
    </div>
  );
};

export default MilitaryLogos;
