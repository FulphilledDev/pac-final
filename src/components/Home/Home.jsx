import React from 'react'
import MilitaryLogos from './MilitaryLogos/MilitaryLogos'
import CarLogo from '../../assets/images/PACCarLogo.jpg'

import YelpReviews from './YelpReviews/YelpReviews'

const Home = () => {
  return (
    <>
      <section className='w-full md:w-3/4 mx-auto'>
        <div className='bg-gradient-to-tr from-zinc-900 to-zinc-900 w-full relative pb-12'>
          <img
            src={CarLogo}
            className='w-full h-full object-cover absolute mix-blend-overlay blur-md z-50'
            alt='bg-carlogo'
          />
          <div className='text-white font-semibold bg-red-500 px-3 py-2 w-full text-center uppercase'>
            This page is under maintenance
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-center text-white font-serif font-extrabold text-5xl md:text-6xl lg:text-8xl pt-16'>
              PATRIOT AIR <br />
              CONDITIONING <br />
            </h1>
            <div className='container w-1/2 lg:w-1/3'>
              <h2 className='text-center w-content uppercase font-sans font-extrabold text-2xl md:text-4xl transform -rotate-6 text-red-700 border border-red-700 border-2 px-2 py-1'>
                Certified
              </h2>
            </div>

            <div>
              <MilitaryLogos />
            </div>

            <div className='flex flex-col justify-center my-4 md:my-12 mx-auto w-full'>
              <h2 className='text-white text-center uppercase text-3xl md:text-5xl mb-4 md:mb-0'>
                No BS. Only{' '}
                <span className='text-red-500 font-[sans-serif] text-3xl md:text-5xl font-bold underline'>
                  Quality
                </span>{' '}
                craftsmanship.
              </h2>
              <p className='text-white text-center mt-0 md:mt-4 px-4 md:px-8 w-full md:w-3/4 mx-auto'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit
                amet erat non dolor pellentesque convallis ut ut nibh. Cras
                consectetur neque sit amet risus luctus cursus. Suspendisse
                tempus non.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-white mt-0 md:py-8'>
          <h2 className='text-center pt-8 text-black text-3xl md:text-5xl underline uppercase font-extrabold mb-4 md:mb-8'>
            Our Reputation
          </h2>
          <YelpReviews />
        </div>
      </section>
    </>
  )
}

export default Home
