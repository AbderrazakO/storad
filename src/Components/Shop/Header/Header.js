import React from 'react'
import Search from '../../Root/SearchBox/SearchBox'

const Header = () => {
  return (
    <div className='shopHeader'>
      <img
        src={`https://images.unsplash.com/photo-1584590069631-1c180f90a54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
        alt='Shop Header Image'
        className='SHeaderImg'
      />
      <Search />
    </div>
  )
}

export default Header
