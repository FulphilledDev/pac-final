import React from 'react'
import ContactFormDetails from './ContactFormDetails'

const ContactFormPage = (props) => {
  return (
    <div className='w-full px-0 md:px-2 py-3 flex flex-col items-center'>
      <div className='flex flex-col items-center p-1'>
        <div className='flex flex-row items-center mb-1 gap-4 justify-center w-full'>
          <div className='bg-black text-white text-center px-3 py-2'>
            <h3 className='text-xl md:text-3xl'>Form</h3>
            <h3 className='text-xl md:text-3xl'>HR001</h3>
          </div>
          <h1 className='text-3xl md:text-6xl text-center font-extrabold'>
            CONTACT REQUEST
          </h1>
        </div>

        <p className='w-full md:w-4/5 text-center px-2 py-3 border-2 border-black mt-4'>
          <span>NOTE:</span> Our average response time is between 1-3 business
          days. Please take this into consideration when submitting this form.{' '}
          <br />
          <br />
          We look forward to hearing from you!
        </p>
      </div>

      <ContactFormDetails
        onCancel={props.closeContactForm}
        onSubmit={props.onFormSubmit}
        formRef={props.formRef}
      />
    </div>
  )
}

export default ContactFormPage
