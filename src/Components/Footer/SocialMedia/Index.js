import React from 'react'
import { FacebookIcon, WhatsappIcon, InstagramIcon, DiscordIcon } from './icons'

const Index = () => {
  return (
    <div className='socialMedia mobileShow'>
      <a target='_blank' href='https://www.google.com/'>
        <FacebookIcon />
      </a>
      <a target='_blank' href='https://www.google.com/'>
        <WhatsappIcon />
      </a>
      <a target='_blank' href='https://www.google.com/'>
        <InstagramIcon />
      </a>
      <a target='_blank' href='https://www.google.com/'>
        <DiscordIcon />
      </a>
    </div>
  )
}

export default Index
