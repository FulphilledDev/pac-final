import React, { useState } from 'react'
import TeamMembers from './TeamMembers'

const INITIAL_TEAM = [
  {
    id: 't1',
    image: 'http://via.placeholder.com/240x240',
    lastName: 'Doe',
    firstName: 'John',
    nickName: 'JD',
    affiliation: 'None',
    militaryBranch: 'NA',
    rank: 'CEO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan sapien elit, nec dignissim velit tincidunt non. Cras maximus, risus eu commodo placerat, lorem magna accumsan purus, id tincidunt risus nunc sed massa. Duis in hendrerit magna. Fusce venenatis venenatis nulla ac consequat.',
  },
  {
    id: 't2',
    image: 'http://via.placeholder.com/240x240',
    lastName: 'Doe',
    firstName: 'Jane',
    nickName: 'Jane',
    affiliation: 'Active Duty',
    militaryBranch: 'Navy',
    rank: 'COO',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan sapien elit, nec dignissim velit tincidunt non. Cras maximus, risus eu commodo placerat, lorem magna accumsan purus, id tincidunt risus nunc sed massa. Duis in hendrerit magna. Fusce venenatis venenatis nulla ac consequat.',
  },
  {
    id: 't3',
    image: 'http://via.placeholder.com/240x240',
    lastName: 'Smith',
    firstName: 'John',
    nickName: 'Joe',
    affiliation: 'Active Duty',
    militaryBranch: 'Army',
    rank: 'EMPLOYEE',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan sapien elit, nec dignissim velit tincidunt non. Cras maximus, risus eu commodo placerat, lorem magna accumsan purus, id tincidunt risus nunc sed massa. Duis in hendrerit magna. Fusce venenatis venenatis nulla ac consequat.',
  },
  {
    id: 't4',
    image: 'http://via.placeholder.com/240x240',
    lastName: 'Smith',
    firstName: 'Jane',
    nickName: 'BlueJay',
    affiliation: 'None',
    militaryBranch: 'NA',
    rank: 'EMPLOYEE',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan sapien elit, nec dignissim velit tincidunt non. Cras maximus, risus eu commodo placerat, lorem magna accumsan purus, id tincidunt risus nunc sed massa. Duis in hendrerit magna. Fusce venenatis venenatis nulla ac consequat.',
  },
]

const Team = () => {
  const [team] = useState(INITIAL_TEAM)

  return (
    <>
      <section className='bg-white w-full md:w-3/4 min-h-screen mx-auto my-0'>
        {team.length >= 1 && (
          // team.length === 0 ||
          // (team.length === null
          <div className='text-white font-semibold bg-red-500 px-3 py-2 w-full text-center uppercase'>
            This page is under maintenance.
          </div>
        )}
        <div className='text-black flex flex-col items-center py-8 gap-4'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-2'>
            OUR PLATOON
          </h1>
          <p className='text-center w-full md:w-3/4 mx-4 md:mx-0 px-4 md:px-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eveniet enim commodi, iusto nulla molestiae odit consequatur quod
            esse, magni laborum quasi! Dolores voluptas quaerat neque eos
            deleniti omnis enim!
          </p>
        </div>
        {team.length >= 1 && (
          <div className='mt-8 md:mt-12'>
            <TeamMembers teamMembers={team} />
          </div>
        )}
      </section>
    </>
  )
}

export default Team
