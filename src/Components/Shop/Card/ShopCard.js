import React from 'react'
import CardBtn from './CardBtn/CardBtn'

const ShopCard = ({
  productImg,
  brandName,
  productName = 'Untitled',
  productPrice = 0,
}) => {
  return (
    <div className='productCard shopCard'>
      <div className='cardImg'>
        <img
          srcSet={productImg}
          alt={`Picture of ${productName}`}
          width='250'
          height='200'
        />
      </div>
      <section className='productInfo'>
        {brandName ? <div className='brandName'>{brandName}</div> : <></>}
        <div className='productName'>{productName}</div>
        <div className='productPrice'>{`$${productPrice}`}</div>
      </section>
      <CardBtn />
    </div>
  )
}

export default ShopCard
