import React from 'react'
import ResNav from '../../Components/Header/ResponsiveNavBar/Index'
import Logo from '../../Components/Root/Logo/Index'
import Nav from '../../Components/Header/Navigator/Index'
import Buttons from '../../Components/Header/ButtonNav/Index'

const Index = ({ obj }) => {
  return (
    <>
      <ResNav
        logo={<Logo />}
        navBar={
          <>
            <Nav initialeState={obj} />
            <Buttons />
          </>
        }
      />
    </>
  )
}

export default Index
