import React, { useState } from 'react'
import ServicesTable from './ServicesTable'
import ServicesCards from './ServicesCards'

const SERVICES = [
  {
    id: 's1',
    title: 'Silver Star Maintenance',
    clearanceLevel: 'Confidential',
    description: 'None',
    feature1: 'Feature1',
    feature2: 'Feature2',
    feature3: 'Feature3',
    startingCost: '$XXX',
    disclaimer: 'Yes',
  },
  {
    id: 's2',
    title: 'Medal of Honor Service',
    clearanceLevel: 'Classified',
    description: '10%',
    feature1: 'Feature1',
    feature2: 'Feature2',
    feature3: 'Feature3',
    startingCost: 'Contact for Quote',
    disclaimer: 'No',
  },
]

const Services = () => {
  const [showCards, setShowCards] = useState(true)

  // ^^^ Alter state to trigger flip animation of card

  return (
    <section className='bg-white w-full md:w-3/4  mx-auto my-0'>
      {(SERVICES.length >= 1 ||
        SERVICES.length === 0 ||
        SERVICES.length === null) && (
        <div className='text-white font-semibold bg-red-500 px-3 py-2 w-full text-center uppercase'>
          This page is under maintenance.
        </div>
      )}
      <div className='text-black flex flex-col items-center py-8 gap-4'>
        <h1 className='text-4xl md:text-5xl font-extrabold mb-2'>SERVICES</h1>
        <p className='text-center w-full md:w-3/4 mx-4 md:mx-0 px-4 md:px-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          eveniet enim commodi, iusto nulla molestiae odit consequatur quod
          esse, magni laborum quasi! Dolores voluptas quaerat neque eos deleniti
          omnis enim!
        </p>
      </div>
      {SERVICES.length >= 1 && (
        <>
          {!showCards && (
            <>
              <div className='flex flex-wrap xl:flex-nowrap px-4 gap-4 my-8 md:my-12'>
                <ServicesTable items={SERVICES} />
              </div>
              <div className='flex flex-row justify-center mt-16 pb-4 hover:underline'>
                <button onClick={() => setShowCards(true)}>Card View</button>
              </div>
            </>
          )}
          {showCards && (
            <>
              <div className='flex flex-wrap xl:flex-nowrap px-4 gap-4 my-8 md:my-12 mx-0 md:mx-4 md:mx-12 pb-4 md:pb-0'>
                <ServicesCards items={SERVICES} />
              </div>
              <div className='flex flex-row justify-center mt-16 pb-4 hover:underline invisible md:visible'>
                <button onClick={() => setShowCards(false)}>Table View</button>
              </div>
            </>
          )}
        </>
      )}
    </section>
  )
}

export default Services
