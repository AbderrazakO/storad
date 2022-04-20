import React from 'react'

const ButtonNav = () => {
  return (
    <div className='headerButtonContainer'>
      <a href='/'>
        <UserIcon />
      </a>
      <a href='/'>
        <ShopIcon />
      </a>
      <a href='/'>
        <DarkModeIcon />
      </a>
    </div>
  )
}

export default ButtonNav
