import React from 'react'
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
          Our goal is to make you happy, Explore more great products with us .
        </p>
        <a href='/shop' className='homeHeaderBtn' aria-label='Start Shopping'>
          Start Shopping
        </a>
      </article>
      <article className='presentationSection'>
        <div className='mainImg'>
          <img srcSet={img} alt='Presentation image' width={400} height='250' />
        </div>
        <div className='presCard'>Price for everyone</div>
        <div className='presCard'>Best package for best product</div>
        <div className='presCard'>The quality is the best</div>
        <div className='presCard'>Delivered as fast as possible</div>
      </article>
    </section>
  )
}

export default Index
