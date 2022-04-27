import { useState } from 'react'
import { DarkModeIcon } from './icon'

const Index = () => {
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

  return (
    <button
      className='darkModeBtn'
      onClick={() => {
        switchTheme()
      }}
    >
      <DarkModeIcon />
    </button>
  )
}

export default Index
