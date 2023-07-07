import React from 'react';
import './Plans.css';
import SilverStar from '../../assets/images/silverStar.jpg';
import MedalOfHonor from '../../assets/images/medalOfHonor.jpg';

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
    maintIncluded1: 'Proper refrigerant charge',
    maintIncluded2: 'Filters and proper air flow',
    maintIncluded3: 'Ducting for secure connections',
    maintIncluded4: 'Check & Adjust Thermostat',
    maintIncluded5: 'Flue vent piping (Carbon Monoxide)',
    maintIncluded6: 'Wiring, contacts, capacitors & relays',
    maintIncluded7: 'Evaporator coil',
    maintIncluded8: 'Condensation drain',
    maintIncluded9: 'Outdoor disconnect',
    maintIncluded10: 'Condensor fan motor & blades',
    maintIncluded11: 'Evaporator fan motor & blades',
    maintIncluded12: 'Compressor',
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
    progIncluded5: 'One (1) pound of refrigerant per year',
    progIncluded6:
      'Two (2) Years parts and labor warranty provided by Patriot Air Conditioning LLC',
    maintIncluded1: 'Proper refrigerant charge',
    maintIncluded2: 'Filters and proper air flow',
    maintIncluded3: 'Ducting for secure connections',
    maintIncluded4: 'Check & Adjust Thermostat',
    maintIncluded5: 'Flue vent piping (Carbon Monoxide)',
    maintIncluded6: 'Wiring, contacts, capacitors & relays',
    maintIncluded7: 'Evaporator coil',
    maintIncluded8: 'Condensation drain',
    maintIncluded9: 'Outdoor disconnect',
    maintIncluded10: 'Condensor fan motor & blades',
    maintIncluded11: 'Evaporator fan motor & blades',
    maintIncluded12: 'Compressor',
    maintIncluded13: 'Inspect & Tighten Schrader Valves',
    maintIncluded14: 'Inspect & Tighten refrigerant caps',
    maintIncluded15: 'Inspect & Clean condensor coil',
    note: "Medal of Honor Maintenance Program is for one (1) AC unit. Addition AC units may be added for service in contracts as an 'add-on'. Additional unit cost: $190 per unit.",
    addNote: 'Filter change out - $17 per filter per visit',
  },
];

const Plans = () => {
  return (
    <div className='w-full md:w-3/4 mx-auto px-6 md:px-0 grid grid-cols-8 lg:grid-cols-12'>
      {PLANS.map((plan) => (
        <>
          {/* <SwiperSlide key={plan.id}> */}
          <div
            className='col-span-8 lg:col-span-6 px-3 md:px-6 mt-3 py-3 bg-white mx-6'
            key={plan.id}
          >
            <div className='w-full'>
              {plan.id === 's1' ? (
                <img
                  src={SilverStar}
                  alt='Silver Star'
                  className='object-cover w-full h-96'
                />
              ) : (
                <img
                  src={MedalOfHonor}
                  alt='Medal of Honor'
                  className='object-cover w-full h-96'
                />
              )}
            </div>
            <div className='text-center'>
              <h3 className='mt-3 uppercase font-bold'>{plan.title}</h3>
            </div>
            <div className='w-full py-3'>
              <div className='grid grid-cols-6 divide-x'>
                <h4 className='col-span-2 text-center font-bold'>
                  {plan.costPerYear} <br />{' '}
                  <p className='font-[Roboto] font-normal'>per year</p>
                </h4>

                <h4 className='col-span-2 text-center font-bold'>
                  {plan.visitsPerYear} <br />{' '}
                  <p className='font-[Roboto] font-normal'>visits per year</p>
                </h4>

                <h4 className='col-span-2 text-center font-bold'>
                  {plan.discountOnJobs} <br />{' '}
                  <p className='font-[Roboto] font-normal'>discount on jobs</p>
                </h4>
              </div>
            </div>

            <div className='my-6 lg:min-h-[175px] xl:min-h-[150px]'>
              <h4 className='font-bold uppercase'>Description</h4>
              <p className='text-black pb-4'>{plan.description} </p>
            </div>

            <div className='my-6'>
              <h4 className='font-bold uppercase'>Member Program Includes</h4>
              <ul className='list-disc pl-6'>
                <li>
                  <p>{plan.progIncluded1}</p>
                </li>
                <li>
                  <p>{plan.progIncluded2}</p>
                </li>
                <li>
                  <p>{plan.progIncluded3}</p>
                </li>
                <li>
                  <p>{plan.progIncluded4}</p>
                </li>
                <li>
                  <p>{plan.progIncluded5}</p>
                </li>
                {plan.progIncluded6 && (
                  <li>
                    <p>{plan.progIncluded6}</p>
                  </li>
                )}
              </ul>
            </div>
            <div className='my-6'>
              <h4 className='font-bold uppercase'>Maintenance Includes</h4>
              <div className='my-3'>
                <h5 className='uppercase underline'>Checks</h5>
                <ul className='list-disc pl-6'>
                  <li>
                    <p>{plan.maintIncluded1}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded2}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded3}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded4}</p>
                  </li>
                </ul>
              </div>
              <div className='my-3'>
                <h5 className='uppercase underline'>Inspections</h5>
                <ul className='list-disc pl-6'>
                  <li>
                    <p>{plan.maintIncluded5}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded6}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded7}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded8}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded9}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded10}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded11}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded12}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded13}</p>
                  </li>
                  <li>
                    <p>{plan.maintIncluded14}</p>
                  </li>
                  {plan.maintIncluded15 && (
                    <li>
                      <p>{plan.maintIncluded15}</p>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className='my-6'>
              <h4 className='uppercase font-bold'>Note</h4>
              <p>{plan.note}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Plans;
