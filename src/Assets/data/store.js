import { BehaviorSubject } from 'rxjs'
import LoremN from '../images/00.png'

const products = [
  {
    id: 0,
    category: 'LoremN',
    element: [
      {
        id: 0,
        name: 'LoremN 0',
        imgSrc:
          'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80',
        price: 33.5,
        weight: 20,
      },
      {
        id: 1,
        name: 'LoremN 1',
        imgSrc: { LoremN },
        price: 3.5,
        weight: 21,
      },
      {
        id: 2,
        name: 'LoremN 2',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 3,
        name: 'LoremN 3',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 4,
        name: 'LoremN 4',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 5,
        name: 'LoremN 5',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 6,
        name: 'LoremN 6',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 7,
        name: 'LoremN 7',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 8,
        name: 'LoremN 8',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
    ],
  },
  {
    id: 1,
    category: 'LoremK',
    element: [
      {
        id: 0,
        name: 'LoremK 0',
        imgSrc: { LoremN },
        price: 33.5,
        weight: 20,
      },
      {
        id: 1,
        name: 'LoremK 1',
        imgSrc: { LoremN },
        price: 3.5,
        weight: 21,
      },
      {
        id: 2,
        name: 'LoremK 2',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 3,
        name: 'LoremK 3',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 4,
        name: 'LoremK 4',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 5,
        name: 'LoremK 5',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
    ],
  },
  {
    id: 2,
    category: 'LoremL',
    element: [
      {
        id: 0,
        name: 'LoremL 0',
        imgSrc: { LoremN },
        price: 33.5,
        weight: 20,
      },
      {
        id: 1,
        name: 'LoremL 1',
        imgSrc: { LoremN },
        price: 3.5,
        weight: 21,
      },
      {
        id: 2,
        name: 'LoremL 2',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 3,
        name: 'LoremL 3',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
      {
        id: 4,
        name: 'LoremL 4',
        imgSrc: { LoremN },
        price: 83.5,
        weight: 40,
      },
    ],
  },
]

export const trackProducts = new BehaviorSubject(products)
