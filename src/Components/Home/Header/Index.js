import React from 'react'
import { Link } from 'react-router-dom'
import img from './00.webp'

const Index = () => {
  return (
    <section className='homeHeader'>
      <article className='homeHeaderArticle'>
        <h1 className='articleTitle'>
          <span>Every Purchase</span>
          <span>Will Be Made</span>
          <span>With Pleasure</span>
        </h1>
        <p className='description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          eos.
        </p>
        <Link to='/shop' className='homeHeaderBtn'>
          Start Shopping
        </Link>
      </article>
      <article className='presentationSection'>
        <div className='mainImg'>
          <img srcSet={img} alt='Presentation image' width={400} height='250' />
        </div>
        <div className='presCard'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          obcaecati!
        </div>
        <div className='presCard'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
        <div className='presCard'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.
        </div>
        <div className='presCard'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </div>
      </article>
    </section>
  )
}

export default Index
