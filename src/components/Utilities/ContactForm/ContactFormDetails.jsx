import React from 'react'

const ContactFormDetails = (props) => {
  return (
    <form
      ref={props.formRef}
      className='mt-8 px-1 py-2 flex flex-col md:flex-row md:flex-wrap justify-around gap-4 w-full md:w-3/4 overflow-auto'
      onSubmit={props.onSubmit}
    >
      <div className='w-full md:w-[40%] flex flex-col'>
        <label htmlFor=''>First Name</label>
        <input
          className='px-2 py-1 border-2 border-black rounded-lg'
          type='text'
          id='firstName'
          name='user_firstName'
          required
        />
      </div>
      <div className='w-full md:w-[40%] flex flex-col'>
        <label htmlFor=''>Last Name</label>
        <input
          className='px-2 py-1 border-2 border-black rounded-lg'
          type='text'
          id='lastName'
          name='user_lastName'
          required
        />
      </div>
      <div className='w-full md:w-[40%] flex flex-col'>
        <label htmlFor=''>Email</label>
        <input
          className='px-2 py-1 border-2 border-black rounded-lg'
          type='email'
          id='email'
          name='user_email'
          required
        />
      </div>
      <div className='w-full md:w-[40%] flex flex-col'>
        <label htmlFor=''>Phone Number</label>
        <input
          className='px-2 py-1 border-2 border-black rounded-lg'
          type='tel'
          id='phoneNumber'
          name='user_phoneNumber'
          required
        />
      </div>
      <div className='w-full md:w-[40%] flex flex-col min-w-1/2 '>
        <label htmlFor=''>Subject</label>
        <select
          className='px-2 py-1 border-2 border-black rounded-lg'
          name='subject'
          required
        >
          <option value='Booking Appointment'>Booking Appointment</option>
          <option value='Service Inquiry: Medal of Honor'>
            Service Inquiry: Medal of Honor
          </option>
          <option value='Service Inquiry: Silver Star'>
            Service Inquiry: Silver Star
          </option>
          <option value='General Questions'>General Questions</option>
          <option value='Immediate Project Start'>
            Immediate Project Start
          </option>
        </select>
      </div>
      <div className='flex flex-col w-full px-2 py-1  mt-4'>
        <label htmlFor=''>Message</label>
        <textarea
          type='text'
          className='border-2 border-black rounded-lg min-h-1.00 p-2'
          id='messageBody'
          name='message'
          required
        ></textarea>
      </div>
      <div className='flex flex-row flex-wrap md:flex-nowrap justify-around w-full mt-8 gap-4'>
        <button className='contact-form__submit-button px-2 py-1 w-full md:w-96 border-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-zinc-800  duration-500 scale-[1] bg-black text-white'>
          Submit
        </button>
        <button
          className='contact-form__cancel-button px-2 py-1 w-full md:w-96 border-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-red-400  duration-500 scale-[1] bg-red-500'
          onClick={props.onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ContactFormDetails
