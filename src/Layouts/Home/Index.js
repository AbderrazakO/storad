import { useEffect, useState } from 'react'
import { trackProducts } from '../../Assets/data/store'
import Header from '../../Components/Home/Header/Index'
import Categories from '../../Components/Home/Categories/Index'
import About from '../../Components/Home/AboutUs/Index'
import Brands from '../../Components/Home/Brands/Index'
import Slid from '../../Components/Home/Popular/Slider/Index'
import Card from '../../Components/Home/Popular/Card/Index'

const Index = () => {
  const popularProducts = [
    {
      id: 0,
      name: 'LoremN 0',
      imgSrc:
        'https://images.unsplash.com/photo-1632748914020-941675839f2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=584&q=80',
      price: 33.5,
      weight: 20,
    },
    {
      id: 1,
      name: 'LoremN 1',
      imgSrc:
        'https://images.unsplash.com/photo-1573875133340-0b589f59a8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 3.5,
      weight: 21,
    },
    {
      id: 2,
      name: 'LoremN 2',
      imgSrc:
        'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 3,
      name: 'LoremN 3',
      imgSrc:
        'https://images.unsplash.com/photo-1594150878496-a921e5af8907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=609&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 4,
      name: 'LoremN 4',
      imgSrc:
        'https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=546&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 5,
      name: 'LoremN 5',
      imgSrc:
        'https://images.unsplash.com/photo-1628012129394-04246f369582?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=566&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 6,
      name: 'LoremN 6',
      imgSrc:
        'https://images.unsplash.com/photo-1597405490028-282bac40f64c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=523&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 7,
      name: 'LoremN 7',
      imgSrc:
        'https://images.unsplash.com/photo-1500063925588-751f924d7c80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      price: 83.5,
      weight: 40,
    },
    {
      id: 8,
      name: 'LoremN 8',
      imgSrc:
        'https://images.unsplash.com/photo-1519682271141-57c25ad60410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
      price: 83.5,
      weight: 40,
    },
  ]
  //
  return (
    <main>
      <Header />
      <About />
      <Categories />
      <Brands />
      {
        <Slid
          title='Products'
          cards={popularProducts.map((e) => {
            const { id, name, imgSrc, price } = e

            return <Card key={id} imgSrc={imgSrc} name={name} price={price} />
          })}
        />
      }
    </main>
  )
}

export default Index
