import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { WrenchIcon, XMarkIcon } from '@heroicons/react/24/solid';
import ContactForm from '../ContactForm/ContactForm';

const NavBar = () => {
  const LINKS = [
    { name: 'HOME', link: '/' },
    { name: 'PLANS', link: '/plans' },
    { name: 'SERVICES', link: '/services' },
    // { name: 'TEAM', link: '/team' },
    // { name: 'PROJECTS', link: '/projects' },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div
      className='bg-black w-full md:w-3/4 mx-auto shadow-md py-3'
      id='topOfList'
    >
      <div className='md:flex items-center relative justify-between bg-black py-1'>
        <div
          className='font-bold text-2xl text-white cursor-pointer flex items-center gap-3'
          style={{ zIndex: 999 }}
        >
          <h3 className='font-bold'>
            {/* <FlagIcon className='h-8 w-8' /> */}
            PATRIOT AIR
          </h3>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='h-4 w-4 md:h-8 md:w-8 absolute right-10 top-8 cursor-pointer md:hidden text-white'
          style={{ zIndex: 9999 }}
        >
          {open ? <XMarkIcon /> : <WrenchIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in bg-black ${
            open ? 'top-0' : 'top-[-490px]'
          }`}
          style={{ zIndex: 9997 }}
        >
          {LINKS.map((link) => (
            <li key={link.name} className='md:ml-8 text-sm md:my-0 my-6'>
              <Link
                to={link.link}
                className='text-white hover:text-blue-400 duration-500'
              >
                {link.name}
              </Link>
            </li>
          ))}
          <ContactForm title='Contact' />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
