import React from 'react';
import Logo from '../../assets/images/Logo.png';

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

const Home = () => {
  return (
    <>
      <section className='w-full md:w-3/4 mx-auto'>
        <div className='w-full'>
          <div className='min-h-screen'>
            <img src={Logo} className='w-full h-full' alt='Logo' />
          </div>

          <div className='flex flex-col gap-4'>
            {/* <h1 className='text-center text-white font-serif font-extrabold text-5xl md:text-6xl lg:text-8xl pt-16'>
              PATRIOT AIR <br />
              CONDITIONING <br />
            </h1> */}
            {/* <div className='container w-1/2 lg:w-1/3'>
              <h2 className='text-center w-content uppercase font-sans font-extrabold text-2xl md:text-4xl transform -rotate-6  border border-red-700 border-2 px-2 py-1 relative left-128 bottom-96'>
                NO BS. Only <h2 className='text-red-700'>quality</h2>{' '}
                craftsmanship
              </h2>
            </div> */}

            {/* <div>
              <MilitaryLogos />
            </div> */}

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
          {/* <YelpReviews /> */}
          <div>
            {YELP_REVIEWS.map((review) => (
              <>
                <span>{review.url}</span>
                <span>{review.text}</span>
                <span>{review.rating}</span>
                <span>{review.user.name}</span>
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
