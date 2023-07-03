import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import emailjs from '@emailjs/browser';
// import ContactFormPage from './ContactFormPage';

import './ContactForm.css';

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div className='text-end mr-8 md:mr-0 md:text-left md:ml-8'>
      <Button onClick={handleOpen} variant='contained'>
        {props.title}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='h-full flex items-center justify-center overflow-y-auto'>
          <Box className='top-4 relative bg-white border-1 border-black p-4 mx-8 lg:mx-auto shadow-md w-full lg:w-[75%] xl:w-[50%]'>
            <div className='w-full'>
              <div className='flex flex-col flex-none items-center'>
                <div className='w-full px-0 md:px-2 py-3 flex flex-col items-center'>
                  <div className='flex flex-col items-center p-1'>
                    <div className='flex flex-row items-center mb-1 gap-4 justify-center w-full'>
                      <h2 className='text-center font-extrabold'>
                        CONTACT REQUEST
                      </h2>
                    </div>

                    <p className='hidden md:block w-full text-center px-2 py-3 border-2 border-black mt-4'>
                      <span>NOTE:</span> Our average response time is between
                      1-3 business days. Please take this into consideration
                      when submitting this form. <br />
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
                    className='mt-8 px-1 py-2 grid grid-cols-8 lg:grid-cols-12 gap-4 w-full'
                    onSubmit={sendEmail}
                  >
                    <div className='hidden'>
                      <input
                        type='text'
                        name='to_name'
                        defaultValue='Ana & Steven'
                      />
                    </div>
                    <div className='col-span-8 md:col-span-4 flex flex-col '>
                      <label htmlFor=''>First Name</label>
                      <input
                        className='px-3 py-2 border-2 border-black focus:outline-none focus:border-blue-600 focus:ring-blue-600'
                        type='text'
                        // id='firstName'
                        name='from_firstName'
                        required
                      />
                    </div>
                    <div className='col-span-8 md:col-span-4 flex flex-col '>
                      <label htmlFor=''>Last Name</label>
                      <input
                        className='px-3 py-2 border-2 border-black focus:outline-none focus:border-blue-600 focus:ring-blue-600'
                        type='text'
                        // id='lastName'
                        name='from_lastName'
                        required
                      />
                    </div>
                    <div className='col-span-8 md:col-span-4 flex flex-col '>
                      <label htmlFor=''>Email</label>
                      <input
                        className='px-3 py-2 border-2 border-black focus:outline-none focus:border-blue-600 focus:ring-blue-600'
                        type='email'
                        name='user_email reply_to'
                        required
                      />
                    </div>
                    <div className='col-span-8 md:col-span-4 flex flex-col '>
                      <label htmlFor=''>Phone Number</label>
                      <input
                        className='px-3 py-2 border-2 border-black focus:outline-none focus:border-blue-600 focus:ring-blue-600'
                        type='tel'
                        // id='phoneNumber'
                        name='user_phone'
                        required
                      />
                    </div>
                    <div className='col-span-8 md:col-span-4 flex flex-col '>
                      <label htmlFor=''>Subject</label>
                      <select
                        className='px-3 py-2.5 border-2 border-black focus:outline-none focus:border-blue-600 focus:ring-blue-600'
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
                        <option
                          className='py-1'
                          value='Immediate Project Start'
                        >
                          Immediate Project Start
                        </option>
                      </select>
                    </div>
                    <div className='col-span-8 lg:col-start-3 flex flex-col w-full  py-1  mt-4 focus:outline-none focus:border-blue-600 focus:ring-blue-600'>
                      <label htmlFor=''>Message</label>
                      <textarea
                        type='text'
                        className='border-2 border-black w-full mx-auto min-h-1.00 p-2'
                        // id='messageBody'
                        name='message'
                        required
                      ></textarea>
                    </div>
                    <div className='col-span-8 lg:col-start-3 flex flex-row flex-wrap md:flex-nowrap justify-around w-full mt-8 gap-4'>
                      <button className='contact-form__submit-button  py-1 w-full md:w-96 border-none hover:bg-black  bg-zinc-800 text-white'>
                        Submit
                      </button>
                      <button
                        className='contact-form__cancel-button px-2 py-1 w-full md:w-96 border-none hover:bg-red-600  bg-red-500 text-white'
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
