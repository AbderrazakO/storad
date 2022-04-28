import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../Assets/images/05.webp'

const HomeHeader = () => {
  return (
    <section className='homeHeader'>
      <article className='homeHeaderArticle'>
        <h1 className='articleTitle'>
          Every Purchase Will Be Made With Pleasure
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
        <img
          srcSet={img}
          className='mainImg'
          alt='Presentation image'
          width={400}
          height='250'
        />
        <div className='cards'>
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
        </div>
      </article>
    </section>
  )
}

export default HomeHeader
