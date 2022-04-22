import React from 'react'
import { UserIcon, ShopIcon, DarkModeIcon } from './icons'

const ButtonNav = () => {
  return (
    <div className='headerButtonContainer'>
      <a href='/' className='headerBtn'>
        <UserIcon />
      </a>
      <a href='/' className='headerBtn'>
        <ShopIcon />
      </a>
      <button className='headerBtn'>
        <DarkModeIcon />
      </button>
    </div>
  )
}

export default ButtonNav
