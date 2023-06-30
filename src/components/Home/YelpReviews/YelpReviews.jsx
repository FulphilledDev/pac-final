import React from 'react'

import './YelpReviews.css'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper'

const TEMP_REVIEWS = [
  {
    id: 1,
    date: '01/23/2023',
    name: 'Ed R',
    link: 'https://www.yelp.com/biz/patriot-air-conditioning-las-vegas?hrid=Wl7Qsj5sxBVlRWtt_pguBg',
    review:
      "There are an endless number of HVAC companies that can be called in the area, but only a few you should, and Patriot should be at the top of that list. First, you deal with excellent people. While it should always be that way, it isn't, and great people make a big difference. Second, they do excellent work. Look over some of the HVAC reviews on Yelp. Some are so bad it is hard to imagine how they exist. Not at Patriot. Great people, great work, great results. Make the right decision. Call Patriot.",
  },
  {
    id: 2,
    date: '01/04/2023',
    name: 'Washburn R',
    link: 'https://www.yelp.com/biz/patriot-air-conditioning-las-vegas?hrid=QuuMRxP82it2E_KmsFClqA',
    review:
      "FINALLY  solved. We were saddled with the 2010ish NVEnergy 1st gen Utility controlled thermostat with a remote air handler box appendage. The wiring mods they made were extensive.NV Energy refused to remove it w/o a big $$ charge as the gov't program that was funding it was terminated.. Our new Sensi thermostat remained in its box.....Patriot to the rescue. The Controller/Thermostat units were removed, wiring fixed, Sensi installed and the Heat Pump was serviced and tested. Excellent work!",
  },
  {
    id: 3,
    date: '08/01/2022',
    name: 'Brandon C',
    link: 'https://www.yelp.com/biz/patriot-air-conditioning-las-vegas?hrid=ciL5k43_KzQSGS-LkEm3bA',
    review:
      'Patriot saved me tonight. Called them past business hours and they were able to get me back online in 2 hours. They are also Veteran owned which is great to support. Steve was professional and great to work with. I highly recommend!!!',
  },
  {
    id: 4,
    date: '06/17/2022',
    name: 'Lenore W',
    link: 'https://www.yelp.com/biz/patriot-air-conditioning-las-vegas?hrid=N3yNminZ6pvIJojzfXb1Pg',
    review:
      'Great company and Professional! Ian was my technician. Quick response for servicing my units. Polite, friendly and really took his time to check over my 2 units to make sure they were running properly. He did find an issue with one unit and asked me to come outside to explain the problem and find a solution. I would definitely recommend Patriot Air for future Air Conditioning needs. Thank you! Patriot Air. I love that it is a Veteran Owned and Operated Company. Thank you for your service!',
  },
  {
    id: 5,
    date: '01/28/2022',
    name: 'Jerry P',
    link: 'https://www.yelp.com/biz/patriot-air-conditioning-las-vegas?hrid=RGhsZWcSP61SQ08DTZuIkg',
    review:
      'I\'ve had a couple bad experiences with Air Conditioning Companies over the years. This Company came recommended to me from a Neighbor/Handyman who said they were Honest and Fair. Of course I was dubious but called anyways. Surprise Surprise.  He was correct!  They diagnosed my "unique" problem and then took the time to prove to me the eternal skeptic that their diagnosis was correct. Stand-up guys who know what they are doing! Highly recommend...',
  },
  {
    id: 6,
    date: '11/18/2021',
    name: 'Karen M',
    link: 'https://www.yelp.com/biz/patriot-air-conditioning-las-vegas?hrid=o9mPrjX5-llSGtrlwnt5JQ',
    review:
      'Spencer came today to perform maintenance on our system and we learned more than we ever knew from builder on how to work the system! We are so pleased and happy to have Patriot LLC that  have employees like Spencer that are professional, knowledgeable, and personable! Could not give higher recommendations or praises for their exceptional work!',
  },
]

const YelpReviews = () => {
  const swiper = useSwiper()

  const onClick = () => {
    swiper.slideNext()
  }
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 10000 }}
        slidesPerView={1}
        spaceBetween={0}
        onClick={onClick}
        className='yelp-review-item__slider'
        breakpoint={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {TEMP_REVIEWS.map((review) => (
          <>
            <SwiperSlide key={review.id}>
              <div className='w-full gap-4 mb-4 md:mb-10 px-4 md:px-12 mt-3'>
                <div className='text-center'>
                  <h3 className='my-1'>
                    <a
                      className='text-black hover:underline hover:text-blue-500'
                      href={review.link}
                    >
                      {review.name}
                    </a>
                  </h3>
                  <p className='text-black'>{review.date}</p>
                </div>

                <p className='text-black pb-4'>{review.review} </p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  )
}

export default YelpReviews
