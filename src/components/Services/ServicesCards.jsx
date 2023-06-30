import React from 'react'
import Card from '../Utilities/Card/Card'
import CarLogo from '../../assets/images/PACCarLogo.jpg'
import Logo from '../../assets/images/Logo.png'

const ServicesCards = (props) => {
  return (
    <>
      {props.items.map((item, index) => (
        <Card key={item.title}>
          <section className='text-center relative h-48 w-full bg-gradient-to-tr from-zinc-700 to-zinc-700 flex flex-col justify-between rounded-t-lg'>
            {index === 0 ? (
              <img
                src={CarLogo}
                className='w-full h-full absolute mix-blend-overlay'
                alt='carLogo'
              />
            ) : (
              <img
                src={Logo}
                className='w-full h-full absolute mix-blend-overlay'
                alt='Logo'
              />
            )}

            <div className='backdrop-blur-sm backdrop-brightness-50 h-full flex flex-col justify-center'>
              <div>
                <h1 className='text-white text-xl uppercase font-extrabold md:text-2xl lg:text-3xl my-4 '>
                  {item.title}
                </h1>
              </div>
              <div className='flex justify-center xl:justify-end m-2'>
                <p className='text-center text-xl uppercase font-bold md:text-xl lg:text-2xl border-2 border-red-500 text-red-500 px-2 h-full w-1/2 xl:w-2/5'>
                  {item.clearanceLevel}
                </p>
              </div>
            </div>
          </section>
          <section className='flex justify-around flex-wrap gap-2'>
            <div className='border-2 border-black w-full px-4 py-2 text-white'>
              <div className='flex flex-col pb-3'>
                <label className='uppercase font-bold leading-7'>
                  Description:{' '}
                </label>
                <span className='font-[Courier-New]'>{item.description}</span>
              </div>
              <div className='flex flex-col pb-3'>
                <label className='uppercase font-bold leading-7'>
                  Feature 1:{' '}
                </label>
                <span className='font-[Courier-New]'>{item.feature1}</span>
              </div>
              <div className='flex flex-col pb-3'>
                <label className='uppercase font-bold leading-7'>
                  Feature 2:{' '}
                </label>
                <span className='font-[Courier-New]'>{item.feature2}</span>
              </div>
              <div className='flex flex-col pb-3'>
                <label className='uppercase font-bold leading-7'>
                  Feature 3:{' '}
                </label>
                <span className='font-[Courier-New]'>{item.feature3}</span>
              </div>
              <div className='flex flex-col pb-3'>
                <label className='uppercase font-bold leading-7'>
                  Starting Cost:{' '}
                </label>
                <span className='font-[Courier-New]'>{item.startingCost}</span>
              </div>
              <div className='flex flex-col pb-3'>
                <label className='uppercase font-bold leading-7'>
                  Disclaimer:{' '}
                </label>
                <span className='font-[Courier-New]'>{item.disclaimer}</span>
              </div>
            </div>
          </section>
        </Card>
      ))}
    </>
  )
}

export default ServicesCards
