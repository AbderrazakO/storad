import { useState } from 'react'

const ResponsiveNavBar = ({ logo, navBar }) => {
  const [state, setState] = useState(false)

  const root = document.querySelector('#root')
  const showResponsive = () => {
    if (state) {
      setState(false)
      root.style.height = 'auto'
    } else {
      setState(true)
      root.style.height = '100vh'
    }
  }

  // console.log(state)

  return (
    <header>
      {logo}
      <input type='checkbox' name='showNav' id='showNav' />
      <label
        htmlFor='showNav'
        className='menuBtn'
        onClick={() => {
          showResponsive()
        }}
      >
        <MenuIcon />
      </label>
      <div className='handleNavigator'>{navBar}</div>
    </header>
  )
}

export default ResponsiveNavBar

const MenuIcon = () => {
  return (
    <svg
      stroke='currentColor'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
    </svg>
  )
}
