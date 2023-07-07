import React from 'react';
import './TeamMembers.css';

import h1 from '../../assets/images/headshot1.jpg';
import h2 from '../../assets/images/headshot2.jpg';
import h3 from '../../assets/images/headshot3.jpg';
import h4 from '../../assets/images/headshot4.jpg';
import Logo from '../../assets/images/Logo.png';

import army from '../../assets/images/deptArmy.png';
import airForce from '../../assets/images/deptAirForce.png';
import navy from '../../assets/images/deptNavy.png';
import marines from '../../assets/images/deptNavyUSMarineCorps.png';

const TeamMembers = (props) => {
  // Map through team members and display each information as a card
  if (props.teamMembers.length === 0) {
    return (
      <h2 className='teamMember-list__fallback'>
        This page is currently under maintenance.
      </h2>
    );
  }

  return (
    <>
      <ul className='list-none pb-8 md:pb-12 px-4 flex flex-wrap justify-center gap-8'>
        {props.teamMembers.map((teamMember, index) => (
          <li className='min-w-1/4 border-black border-1 rounded-md  shadow-lg w-full lg:w-3/4 xl:w-2/5'>
            <div className='rounded-md relative bg-gradient-to-tr from-zinc-100 to-zinc-400 bg-brightness-25'>
              <div className='px-4 py-4 flex flex-col gap-4 my-1 relative'>
                <div className='w-full'>
                  <img
                    className='object-cover w-full h-80'
                    src={
                      index === 1
                        ? h1
                        : index === 2
                        ? h2
                        : index === 3
                        ? h3
                        : h4
                    }
                    alt='team member headshot'
                  />
                </div>
                <div className='px-4 py-2 relative'>
                  {teamMember.affiliation === 'Active Duty' ? (
                    <>
                      {teamMember.militaryBranch === 'Navy' ? (
                        <img
                          src={navy}
                          className='object-cover rounded-md w-full h-full absolute mix-blend-overlay opacity-10 right-1'
                          alt='company_logo'
                        />
                      ) : teamMember.militaryBranch === 'Army' ? (
                        <img
                          src={army}
                          className='object-cover rounded-md w-full h-full absolute mix-blend-overlay opacity-10 right-1'
                          alt='company_logo'
                        />
                      ) : teamMember.militaryBranch === 'Marines' ? (
                        <img
                          src={marines}
                          className='object-cover rounded-md w-full h-full absolute mix-blend-overlay opacity-10 right-1'
                          alt='company_logo'
                        />
                      ) : (
                        <img
                          src={airForce}
                          className='object-cover rounded-md w-full h-full absolute mix-blend-overlay opacity-10 right-1'
                          alt='company_logo'
                        />
                      )}
                    </>
                  ) : (
                    <img
                      src={Logo}
                      className='object-cover rounded-md w-full h-full absolute mix-blend-overlay opacity-10 right-1'
                      alt='company_logo'
                    />
                  )}
                  <div className='pb-2'>
                    <label className='uppercase font-bold'>Name</label>
                    <p>
                      {teamMember.firstName} {teamMember.lastName}
                    </p>
                  </div>
                  <div className='pb-2'>
                    <label className='uppercase font-bold'>Rank</label>
                    <p>{teamMember.rank}</p>
                  </div>
                  <div className='pb-2'>
                    <label className='uppercase font-bold'>Biography</label>
                    <p className='bio'>{teamMember.bio}</p>
                  </div>
                </div>
                <div className='px-4 py-2'>
                  <label className='uppercase font-bold'>Nick Name</label>
                  <p className='bg-blue-500 text-white uppercase mt-0 py-0 px-1 text-center'>
                    {teamMember.nickName}
                  </p>
                </div>
              </div>
              <div className='px-4 py-2 text-center'>
                {teamMember.affiliation === 'Active Duty'
                  ? 'Patriot AC Military Service ID'
                  : 'Patriot AC Civilian ID'}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamMembers;
