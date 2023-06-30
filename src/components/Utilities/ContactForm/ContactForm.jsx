import React, { useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'

import emailjs from '@emailjs/browser'
import ContactFormPage from './ContactFormPage'

import './ContactForm.css'

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_psq03se',
        'template_ejw02rv',
        form.current,
        '8t1W3IJI0Qyof7Cnd'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

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
        <div className='h-screen flex items-center justify-center'>
          <Box className='top-4 relative bg-white border-2 border-black p-4 mx-auto shadow-md w-full md:w-[85%] lg:w-[75%]'>
            <div className='w-full'>
              <div className='flex flex-col flex-none items-center'>
                <ContactFormPage
                  closeContactForm={handleClose}
                  onFormSubmit={sendEmail}
                />
              </div>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  )
}
