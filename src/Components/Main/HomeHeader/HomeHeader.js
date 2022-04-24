import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../Assets/images/products/00.png'

const HomeHeader = () => {
  return (
    <section className='homeHeader'>
      <article className='homeHeaderArticle'>
        <h1>Every Purchase Will Be Made With Pleasure</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          eos.
        </p>
        <Link to='/shop' className='homeHeaderBtn'>
          Start Shopping
        </Link>
      </article>
      <article className='presentationSection'>
        <img src={img} alt='' srcset='' />
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

export default HomeHeader
