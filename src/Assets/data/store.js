import { BehaviorSubject } from 'rxjs'
import LoremN from '../images/00.png'

const products = [
  {
    id: 1,
    category: 'Nuts',
    element: [
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
    ],
  },
  {
    id: 2,
    category: 'Kitchen Equipment',
    element: [
      {
        id: 0,
        name: 'LoremK 0',
        imgSrc:
          'https://images.unsplash.com/photo-1615485500293-9a75e3e9e4f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 20,
      },
      {
        id: 1,
        name: 'LoremK 1',
        imgSrc:
          'https://images.unsplash.com/photo-1587411768065-fd9b9dd13359?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 3.5,
        weight: 21,
      },
      {
        id: 2,
        name: 'LoremK 2',
        imgSrc:
          'https://images.unsplash.com/photo-1587411768913-623b76d243c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 83.5,
        weight: 40,
      },
      {
        id: 3,
        name: 'LoremK 3',
        imgSrc:
          'https://images.unsplash.com/photo-1587334106164-520604dd7862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 83.5,
        weight: 40,
      },
      {
        id: 4,
        name: 'LoremK 4',
        imgSrc:
          'https://images.unsplash.com/photo-1587302108992-20648821725d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 83.5,
        weight: 40,
      },
      {
        id: 5,
        name: 'LoremK 5',
        imgSrc:
          'https://images.unsplash.com/photo-1587049447800-c0efb5514883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 83.5,
        weight: 40,
      },
    ],
  },
  {
    id: 3,
    category: 'Vegetables',
    element: [
      {
        id: 0,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1615485499978-1279c3d6302f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 1,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1615485290161-7eb49a34eba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 2,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1615485291234-9d694218aeb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 3,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1615484477201-9f4953340fab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 4,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1587735243474-5426387356db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 5,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1587411768638-ec71f8e33b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 6,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1587411768515-eeac0647deed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 7,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1587411768345-867e228218c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 8,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1587334274084-2def9f57bd27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 9,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 10,
        name: 'LoremV 0',
        imgSrc:
          'https://images.unsplash.com/photo-1587049300929-3d2195b7e5f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
    ],
  },
  {
    id: 4,
    category: 'Leaf',
    element: [
      {
        id: 0,
        name: 'LoremL 0',
        imgSrc:
          'https://images.unsplash.com/photo-1587131766835-e5dfaf70ea20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 1,
        name: 'LoremL 0',
        imgSrc:
          'https://images.unsplash.com/photo-1587334274328-64186a80aeee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 2,
        name: 'LoremL 0',
        imgSrc:
          'https://images.unsplash.com/photo-1587578855406-891fbbc8949e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 3,
        name: 'LoremL 0',
        imgSrc:
          'https://images.unsplash.com/photo-1580724780403-2398394b5cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 4,
        name: 'LoremL 0',
        imgSrc:
          'https://images.unsplash.com/photo-1576561409251-f176dc6aee00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 5,
        name: 'LoremL 0',
        imgSrc:
          'https://images.unsplash.com/photo-1576561121736-1fc8c3786b5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 6,
        name: 'LoremL 0',
        imgSrc:
          'https://images.unsplash.com/photo-1572989750259-8f7f27c581e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 7,
        name: 'LoremL 0',
        imgSrc:
          'https://images.unsplash.com/photo-1580724780383-2a691b906433?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
      {
        id: 8,
        name: 'LoremL 0',
        imgSrc:
          'https://images.unsplash.com/photo-1583116935690-eb4893c5de84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        price: 33.5,
        weight: 1000,
      },
    ],
  },
]

export const trackProducts = new BehaviorSubject(products)
