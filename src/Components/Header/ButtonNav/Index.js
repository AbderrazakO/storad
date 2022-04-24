import React, { useState } from 'react'
import { UserIcon, ShopIcon, DarkModeIcon } from './icons'

const ButtonNav = () => {
  const [theme, setTheme] = useState('light')
  const switchTheme = () => {
    const root = document.getElementById('root')
    if (theme === 'light') {
      root.classList.remove('light')
      root.classList.add('dark')
      setTheme('dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
      setTheme('light')
    }
  }

  //
  return (
    <div className='headerButtonContainer'>
      <a href='/' className='headerBtn'>
        <UserIcon />
      </a>
      <a href='/' className='headerBtn'>
        <ShopIcon />
      </a>
      <button
        className='headerBtn'
        onClick={() => {
          switchTheme()
        }}
      >
        <DarkModeIcon />
      </button>
    </div>
  )
}

export default ButtonNav
