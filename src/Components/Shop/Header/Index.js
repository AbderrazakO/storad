import React from 'react'
import SIM from '../../../Assets/images/shop/01.webp'
import Search from '../../Root/SearchBox/SearchBox'

const Index = () => {
  return (
    <div className='shopHeader'>
      <img src={SIM} alt='Shop Header Image' className='SHeaderImg' />
      <Search />
    </div>
  )
}

export default Index
