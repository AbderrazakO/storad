import React from 'react'
import Header from '../../Components/Main/HomeHeader/HomeHeader'
import Card from '../../Components/Main/Card/Index'
import Slider from '../../Components/Main/DragSlider/Index'

const Index = () => {
  return (
    <main>
      <Header />
      {/* <Table /> */}
      <Slider
        cards={
          <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        }
      />
      <Slider
        cards={
          <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        }
      />
    </main>
  )
}

export default Index
