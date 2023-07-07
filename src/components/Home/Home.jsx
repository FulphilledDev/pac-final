import React, { useRef } from 'react';
import Logo from '../../assets/images/Logo.png';
// import LogoAni from '../../assets/images/LogoAni.mp4';
import BioDuoPhoto from '../../assets/images/BioDuoPhoto.png';
import MilitaryLogos from './MilitaryLogos/MilitaryLogos';
import emailjs from '@emailjs/browser';

const YELP_REVIEWS = [];

// API Credentials
const REQUEST_URL = `https://api.yelp.com/v3/businesses/patriot-air-conditioning-las-vegas/reviews`;
const API_KEY =
  'N4sNYw3iK3kHajoDNsBjx7w_6qf0Pzyu2eSzZ7rx6Vi_8NnEbHxVFrx7wrcy9b_xsNxA5sMpQv6sXjWwgz31xRvDZpwuGL_zY0gMs3AhahWh89vGYlBEmzcIK8qeZHYx';

const getYelpReviews = async () => {
  const response = await fetch(REQUEST_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  const reviews = data.reviews;
  YELP_REVIEWS.push(...reviews);

  console.log(YELP_REVIEWS);

  return YELP_REVIEWS;
};

// getYelpReviews();

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7fj3cqr',
        'template_pg893fq',
        form.current,
        '8t1W3IJI0Qyof7Cnd'
      )
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
            {/* <video autoplay='true' loop='true'>
              <source
                src='../../assets/images/LogoAni.mp4'
                type='video/mp4'
              ></source>
            </video> */}
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
                {/* Steven Biography goes here */}
                <p className='text-white text-center mt-0 md:mt-4 px-4 md:px-8 w-full md:w-3/4 mx-auto'>
                  We have nothing to sell you. We tailor our services to and
                  develop a candid relationship with you to save you more time
                  and money all while staying cool.
                </p>
              </div>
              <div className='col-span-2 lg:col-span-1 flex justify-center object-cover'>
                <img src={BioDuoPhoto} alt='Steven Headsot' />
              </div>
            </div>

            <div className='mb-3 md:mb-6 lg:mb-12'>
              <MilitaryLogos />
            </div>
          </div>
        </div>
        <div className='w-full mx-3 md:mx-auto lg:w-4/5 mb-12'>
          <div className='w-full text-white'>
            <div className='flex flex-col flex-none items-center'>
              <div className='w-full px-0 md:px-2 py-3 flex flex-col items-center'>
                <div className='flex flex-col items-center p-1'>
                  <h4 className='text-start font-extrabold uppercase'>
                    Let's Talk about it
                  </h4>

                  <p className='hidden md:block w-full text-center px-2 py-3 border-2 border-white mt-4'>
                    <span>NOTE:</span> If we don't get back to you within 24
                    hours, the first consultation will be on us. <br />
                    <br />
                    We look forward to hearing from you!
                  </p>
                </div>
                {/* <ContactFormPage
                  closeContactForm={handleClose}
                  onFormSubmit={sendEmail}
                /> */}
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
                      className='text-black px-3 py-2 border-2 border-white focus:outline-none focus:border-blue-600 focus:ring-blue-600'
                      type='text'
                      // id='firstName'
                      name='from_firstName'
                      required
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col '>
                    <label htmlFor=''>Last Name</label>
                    <input
                      className='text-black px-3 py-2 border-2 border-white focus:outline-none focus:border-blue-600 focus:ring-blue-600'
                      type='text'
                      // id='lastName'
                      name='from_lastName'
                      required
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col '>
                    <label htmlFor=''>Email</label>
                    <input
                      className='text-black px-3 py-2 border-2 border-white focus:outline-none focus:border-blue-600 focus:ring-blue-600'
                      type='email'
                      name='user_email'
                      required
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col '>
                    <label htmlFor=''>Phone Number</label>
                    <input
                      className='text-black px-3 py-2 border-2 border-white focus:outline-none focus:border-blue-600 focus:ring-blue-600'
                      type='tel'
                      // id='phoneNumber'
                      name='user_phone'
                      required
                    />
                  </div>
                  <div className='col-span-8 lg:col-span-6 flex flex-col lg:col-start-3 lg:col-end-11'>
                    <label htmlFor=''>Subject</label>
                    <select
                      className='text-black px-3 py-2.5 border-2 border-white focus:outline-none focus:border-blue-600 focus:ring-blue-600'
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
                  <div className='col-span-8 lg:col-start-3 flex flex-col w-full  py-1  mt-4 focus:outline-none focus:border-blue-600 focus:ring-blue-600'>
                    <label htmlFor=''>Message</label>
                    <textarea
                      type='text'
                      className='text-black border-2 border-white w-full mx-auto min-h-1.00 p-2'
                      // id='messageBody'
                      name='message'
                      required
                    ></textarea>
                  </div>
                  <div className='col-span-8 lg:col-start-3 flex flex-row flex-wrap md:flex-nowrap justify-around w-full mt-8 gap-4'>
                    <button className='contact-form__submit-button  rounded-sm py-1 w-full md:w-96 border-none hover:bg-red-800  bg-red-600 text-white uppercase font-bold'>
                      Send it
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white mt-0 md:py-8'>
          <h2 className='text-center pt-8 text-black text-3xl md:text-5xl underline uppercase font-extrabold mb-4 md:mb-8'>
            Our Reputation
          </h2>
          {/* <YelpReviews /> */}
          <div>
            {YELP_REVIEWS.map((review) => (
              <>
                <div>{review.url}</div>
                <div>{review.text}</div>
                <div>{review.rating}</div>
                <div>{review.user.name}</div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// getYelpReviews();

export default Home;
