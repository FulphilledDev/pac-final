import React, { useState } from 'react';
import './Plans.css';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';

const PLANS = [
  {
    id: 's1',
    title: 'Silver Star Maintenance',
    clearanceLevel: 'Confidential',
    visitsPerYear: '2',
    discountOnJobs: '5%',
    costPerYear: '$190.00',
    description:
      'Residential HVAC maintenance to ensure that your heating and cooling systems are in the best condition possible and will function properly throughout each season. This maintenance plan includes bi-annual maintenance and checkup on this unit',
    progIncluded1: 'Top priority booking within 24 hours',
    progIncluded2: '50% off of service/disgnosis fee',
    progIncluded3: '5% discount for additional services',
    progIncluded4: 'One (1) Outdoor Coil Cleaning per year',
    progIncluded5:
      'One (1) Year parts and labor warranty provided by Patriot Air Conditioning LLC',
    maintIncluded1: 'Check proper refrigerant charge',
    maintIncluded2: 'Check filters and proper air flow',
    maintIncluded3: 'Check ducting for secure connections',
    maintIncluded4: 'Check & Adjust Thermostat',
    maintIncluded5: 'Inspect flue vent piping (Carbon Monoxide)',
    maintIncluded6: 'Inspect wiring, contacts, capacitors & relays',
    maintIncluded7: 'Inspect evaporator coil',
    maintIncluded8: 'Inspect condensation drain',
    maintIncluded9: 'Inspect outdoor disconnect',
    maintIncluded10: 'Inspect condensor fan motor & blades',
    maintIncluded11: 'Inspect evaporator fan motor & blades',
    maintIncluded12: 'Inspect compressor',
    maintIncluded13: 'Inspect & Tighten Schrader Valves',
    maintIncluded14: 'Inspect & Tighten refrigerant caps',
    note: "Silver Star Maintenance Program is for one (1) AC unit. Addition AC units may be added for service in contracts as an 'add-on'. Additional unit cost: $90 per unit.",
    addNote: 'Filter change out - $17 per filter per visit',
  },
  {
    id: 's2',
    title: 'Medal of Honor Maintenance',
    clearanceLevel: 'Confidential',
    visitsPerYear: '2',
    discountOnJobs: '10%',
    costPerYear: '$290.00',
    description:
      'Residential HVAC maintenance to ensure that your heating and cooling systems are in the best condition possible and will function properly throughout each season.',
    progIncluded1: 'Same Day Service',
    progIncluded2: 'Free service/diagnosis',
    progIncluded3: '10% discount for additional services',
    progIncluded4: 'One (1) Outdoor Coil Cleaning per year',
    progIncluded4: 'One (1) pound of refrigerant per year',
    progIncluded5:
      'Two (2) Years parts and labor warranty provided by Patriot Air Conditioning LLC',
    maintIncluded1: 'Check proper refrigerant charge',
    maintIncluded2: 'Check filters and proper air flow',
    maintIncluded3: 'Check ducting for secure connections',
    maintIncluded4: 'Check & Adjust Thermostat',
    maintIncluded5: 'Inspect flue vent piping (Carbon Monoxide)',
    maintIncluded6: 'Inspect wiring, contacts, capacitors & relays',
    maintIncluded7: 'Inspect evaporator coil',
    maintIncluded8: 'Inspect condensation drain',
    maintIncluded9: 'Inspect outdoor disconnect',
    maintIncluded10: 'Inspect condensor fan motor & blades',
    maintIncluded11: 'Inspect evaporator fan motor & blades',
    maintIncluded12: 'Inspect compressor',
    maintIncluded13: 'Inspect & Tighten Schrader Valves',
    maintIncluded14: 'Inspect & Tighten refrigerant caps',
    maintIncluded14: 'Inspect & Clean condensor coil',
    note: "Medal of Honor Maintenance Program is for one (1) AC unit. Addition AC units may be added for service in contracts as an 'add-on'. Additional unit cost: $190 per unit.",
    addNote: 'Filter change out - $17 per filter per visit',
  },
];

const Plans = () => {
  const swiper = useSwiper();

  const onClick = () => {
    swiper.slideNext();
  };
  return (
    <div className='w-full md:w-3/4 mx-auto'>
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 10000 }}
        slidesPerView={2}
        spaceBetween={32}
        onClick={onClick}
        breakpoint={{
          768: {
            slidesPerView: 1,
          },
        }}
      >
        {PLANS.map((plan) => (
          <>
            <SwiperSlide key={plan.id}>
              <div className='mb-4 md:mb-10 px-4 md:px-12 mt-3 py-3'>
                <div className='text-center'>
                  <h3 className='my-1'>{plan.title}</h3>
                </div>
                <div className='w-full py-3 border border-md '>
                  <div className='grid grid-cols-6 gap-3'>
                    <p className='col-span-2'>
                      {plan.costPerYear} <br /> per year
                    </p>

                    <p className='col-span-2'>
                      {plan.visitsPerYear} <br /> visits per year
                    </p>

                    <p className='col-span-2'>
                      {plan.discountOnJobs} <br /> discount on jobs
                    </p>
                  </div>
                </div>

                <p className='text-black pb-4'>{plan.description} </p>
                <div>
                  <h4>Member Maintenance Program Includes</h4>
                  <ul>
                    <li>{plan.progIncluded1}</li>
                    <li>{plan.progIncluded2}</li>
                    <li>{plan.progIncluded3}</li>
                    <li>{plan.progIncluded4}</li>
                    <li>{plan.progIncluded5}</li>
                  </ul>
                </div>
                <div>
                  <h4>Maintenance Includes</h4>
                  <ul>
                    <li>{plan.maintIncluded1}</li>
                    <li>{plan.maintIncluded2}</li>
                    <li>{plan.maintIncluded3}</li>
                    <li>{plan.maintIncluded4}</li>
                    <li>{plan.maintIncluded5}</li>
                    <li>{plan.maintIncluded6}</li>
                    <li>{plan.maintIncluded7}</li>
                    <li>{plan.maintIncluded8}</li>
                    <li>{plan.maintIncluded9}</li>
                    <li>{plan.maintIncluded10}</li>
                    <li>{plan.maintIncluded11}</li>
                    <li>{plan.maintIncluded12}</li>
                    <li>{plan.maintIncluded13}</li>
                    <li>{plan.maintIncluded14}</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Plans;
