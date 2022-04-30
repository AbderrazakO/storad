import { useEffect, useState } from 'react'
import Header from '../../Components/Main/HomeHeader/HomeHeader'
// import Card from '../../Components/Main/Card/Index'
// import Slider from '../../Components/Main/DragSlider/Index'
import { trackProducts } from '../../Assets/data/store'

//
// import Header from '../../Components/Home/Header/Index'
import Categories from '../../Components/Home/Categories/Index'
// import About from '../../Components/Home/AboutUs/Index'
import Brands from '../../Components/Home/Brands/Index'
import Slid from '../../Components/Home/Popular/Slider/Index'
import Card from '../../Components/Home/Popular/Card/Index'

const Index = () => {
  const element = [
    {
      id: 0,
      name: 'LoremN 0',
      imgSrc:
        'https://images.unsplash.com/photo-1615485925873-7ecbbe90a866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 33.5,
      weight: 20,
    },
    {
      id: 1,
      name: 'LoremN 1',
      imgSrc:
        'https://images.unsplash.com/photo-1615485925933-379c8b6ad03c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 3.5,
      weight: 21,
    },
    {
      id: 2,
      name: 'LoremN 2',
      imgSrc:
        'https://images.unsplash.com/photo-1615485500515-42eac2a156b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 3,
      name: 'LoremN 3',
      imgSrc:
        'https://images.unsplash.com/photo-1615485500710-aa71300612aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 4,
      name: 'LoremN 4',
      imgSrc:
        'https://images.unsplash.com/photo-1615485500834-bc10199bc727?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 5,
      name: 'LoremN 5',
      imgSrc:
        'https://images.unsplash.com/photo-1615485500551-a968b29b07fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 6,
      name: 'LoremN 6',
      imgSrc:
        'https://images.unsplash.com/photo-1615485500744-e8a30c8d3820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 7,
      name: 'LoremN 7',
      imgSrc:
        'https://images.unsplash.com/photo-1615485500335-71dfcd4902dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 8,
      name: 'LoremN 8',
      imgSrc:
        'https://images.unsplash.com/photo-1615486629440-c3862d0e0f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 83.5,
      weight: 40,
    },
  ]
  //
  return (
    <main>
      <Header />
      <Categories />
      <Brands />
      {
        <Slid
          cards={element.map((e) => {
            const { id, name, imgSrc, price } = e

            return <Card key={id} imgSrc={imgSrc} name={name} price={price} />
          })}
        />
      }
    </main>
  )
}

export default Index
