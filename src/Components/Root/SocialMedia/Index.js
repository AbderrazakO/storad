import React from 'react'
import { FacebookIcon, WhatsappIcon, InstagramIcon, DiscordIcon } from './icons'

const Index = () => {
  return (
    <div className='socialMedia mobileShow'>
      <a
        target='_blank'
        href='https://www.google.com/'
        aria-label='Facebook Icon'
      >
        <FacebookIcon />
      </a>
      <a
        target='_blank'
        href='https://www.google.com/'
        aria-label='Whatsapp Icon'
      >
        <WhatsappIcon />
      </a>
      <a
        target='_blank'
        href='https://www.google.com/'
        aria-label='Instagram Icon'
      >
        <InstagramIcon />
      </a>
      <a
        target='_blank'
        href='https://www.google.com/'
        aria-label='Discord Icon'
      >
        <DiscordIcon />
      </a>
    </div>
  )
}

export default Index
