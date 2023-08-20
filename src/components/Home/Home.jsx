import React, { useRef } from 'react';
import Logo from '../../assets/images/Logo.png';
import BioDuoPhoto from '../../assets/images/BioDuoPhoto.png';
import MilitaryLogos from './MilitaryLogos/MilitaryLogos';
import emailjs from '@emailjs/browser';

import './Home.css';

const emailService = 'service_20jrp3g';
const emailTemplate = 'template_39th1bn';

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailService, emailTemplate, form.current, 'KfREr6WUC3PWiP7fO')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <section className='w-full md:w-3/4 mx-auto'>
        <div className='w-full'>
          <div className='min-h-screen'>
            <img src={Logo} className='w-full h-full' alt='Logo' />
          </div>

          <div className='flex flex-col gap-4'>
            <div className='grid grid-cols-2 my-3 md:my-6 lg:my-12'>
              <div className='flex flex-col justify-center my-4 md:my-12 mx-auto w-full col-span-2 lg:col-span-1'>
                <p className='text-white text-center uppercase xs:text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[48px] font-bold mb-4 md:mb-0'>
                  No BS. Only{' '}
                  <p className='inline-block text-red-500 xs:text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[48px] font-bold underline'>
                    Quality
                  </p>{' '}
                  craftsmanship.
                </p>
                {/* CEO Biography goes here */}
                <p className='text-white text-center mt-0 md:mt-4 px-4 md:px-8 w-full md:w-3/4 mx-auto'>
                  We have nothing to sell you. We tailor our services to and
                  develop a candid relationship with you to save you more time
                  and money all while staying cool.
                </p>
              </div>
              <div className='col-span-2 lg:col-span-1 flex justify-center object-cover'>
                <img
                  src={BioDuoPhoto}
                  alt='Steven Headsot'
                  className='object-cover'
                />
              </div>
            </div>

            <div className='mb-3 md:mb-6 lg:mb-12'>
              <MilitaryLogos />
            </div>
          </div>
        </div>
        <hr style={{ color: 'white', border: '2px solid white' }}></hr>

        <div className='w-full mx-3 md:mx-auto lg:w-4/5 mb-12 mt-12'>
          <div className='w-full text-white'>
            <div className='flex flex-col flex-none items-center'>
              <div className='w-full px-0 md:px-2 py-3 flex flex-col items-center'>
                <div className='flex flex-col items-center p-1' id='contact'>
                  <h2 className='text-start font-extrabold uppercase'>
                    Let's Talk about it
                  </h2>

                  <p className='hidden md:block w-full text-center px-2 py-3 border-2 border-white mt-4'>
                    <span>NOTE:</span> If we don't get back to you within 24
                    hours, the first consultation will be on us. <br />
                    <br />
                    We look forward to hearing from you!
                  </p>
                </div>
                <form
                  ref={form}
                  className='mt-8 px-1 py-2 grid grid-cols-8 lg:grid-cols-12 gap-4 w-4/5 lg:w-full xl:w-4/5'
                  onSubmit={sendEmail}
                >
                  <div className='hidden'>
                    <input
                      type='text'
                      name='to_name'
                      defaultValue='Ana & Steven'
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col '>
                    <label htmlFor=''>First Name</label>
                    <input
                      className='text-black px-3 py-2 border-2 border-black shadow-md shadow-slate-600 rounded-md focus:outline-none focus:shadow-blue-800 focus:border-blue-800'
                      type='text'
                      // id='firstName'
                      name='from_firstName'
                      required
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col '>
                    <label htmlFor=''>Last Name</label>
                    <input
                      className='text-black px-3 py-2 border-2 border-black shadow-md shadow-slate-600 rounded-md focus:outline-none focus:shadow-blue-800 focus:border-blue-800'
                      type='text'
                      // id='lastName'
                      name='from_lastName'
                      required
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col '>
                    <label htmlFor=''>Address</label>
                    <input
                      className='text-black px-3 py-2 border-2 border-black shadow-md shadow-slate-600 rounded-md focus:outline-none focus:shadow-blue-800 focus:border-blue-800'
                      type='text'
                      // id='lastName'
                      name='address'
                      required
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col '>
                    <label htmlFor=''>Email</label>
                    <input
                      className='text-black px-3 py-2 border-2 border-black shadow-md shadow-slate-600 rounded-md focus:outline-none focus:shadow-blue-800 focus:border-blue-800'
                      type='email'
                      name='user_email'
                      required
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col '>
                    <label htmlFor=''>Phone Number</label>
                    <input
                      className='text-black px-3 py-2 border-2 border-black shadow-md shadow-slate-600 rounded-md focus:outline-none focus:shadow-blue-800 focus:border-blue-800'
                      type='tel'
                      // id='phoneNumber'
                      name='user_phone'
                      required
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col'>
                    <label htmlFor=''>Subject</label>
                    <select
                      className='text-black px-3 py-2.5 border-2 border-black shadow-md shadow-slate-600 rounded-md focus:outline-none focus:shadow-blue-800 focus:border-blue-800'
                      name='subject'
                      required
                    >
                      <option className='py-1' value='Booking Appointment'>
                        Booking Appointment
                      </option>
                      <option
                        className='py-1'
                        value='Service Inquiry: Medal of Honor'
                      >
                        Service Inquiry: Medal of Honor
                      </option>
                      <option
                        className='py-1'
                        value='Service Inquiry: Silver Star'
                      >
                        Service Inquiry: Silver Star
                      </option>
                      <option className='py-1' value='General Questions'>
                        General Questions
                      </option>
                      <option className='py-1' value='Immediate Project Start'>
                        Immediate Project Start
                      </option>
                    </select>
                  </div>
                  <div className='col-span-8 lg:col-start-3 flex flex-col w-full  py-1  mt-4'>
                    <label htmlFor=''>Message</label>
                    <textarea
                      type='text'
                      className='text-black border-2 border-black shadow-lg shadow-slate-600 rounded-md focus:outline-none focus:shadow-blue-600 w-full mx-auto min-h-1.00 p-2'
                      // id='messageBody'
                      name='message'
                      required
                    ></textarea>
                  </div>
                  <div className='col-span-8 lg:col-start-3 flex flex-row flex-wrap md:flex-nowrap justify-around w-full mt-8 gap-4'>
                    <button className='contact-form__submit-button  rounded-sm py-1 w-full md:w-96 border-none shadow-md shadow-red-800 hover:bg-red-700  bg-red-600 text-white uppercase font-bold'>
                      Send it
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: 'white', border: '2px solid white' }}></hr>
        <div
          className='bg-black mt-0 md:py-8'
          style={{ maxWidth: '1100px', margin: 'auto' }}
        >
          <h2 className='text-center pt-8 text-white text-4xl md:text-5xl uppercase font-extrabold mb-4 md:mb-8'>
            Our Reputation
          </h2>
          <div style={{ padding: '10px' }}>
            <iframe
              src='https://widget.taggbox.com/139468'
              style={{
                width: '100%',
                height: '350px',
                border: 'none',
                overflow: 'none',
                backgroundColor: 'black',
              }}
              title='PAC Yelp Reviews'
            ></iframe>
          </div>
        </div>
        <hr style={{ color: 'white', border: '2px solid white' }}></hr>
      </section>
    </>
  );
};

// getYelpReviews();

export default Home;
