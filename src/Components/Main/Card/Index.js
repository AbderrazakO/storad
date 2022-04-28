import { useEffect, useState } from 'react'
import { trackBag, addToBag } from '../../../Assets/data/bag'
import { v4 as uuid } from 'uuid'

const Index = ({ imgSrc, name = 'Untitled', price = 0 }) => {
  const addBag = (name, price, imgSrc) => {
    const newObj = { id: uuid(), name, price, imgSrc }
    addToBag(newObj)
    // console.log(newObj)
  }

  //
  return (
    <div className='productCard'>
      <div className='cardImg'>
        <img srcSet={imgSrc} alt={`${name} picture`} width='250' height='200' />
      </div>
      <div className='productInfo'>
        <div className='infoCol'>
          <div className='productName'>{name}</div>
          <div className='productPrice'>{`${price} $`}</div>
        </div>
        <div className='infoCol'>
          <div
            className='addBtn'
            onClick={() => {
              addBag(name, price, imgSrc)
            }}
          >
            Add
          </div>
        </div>
      </div>
    </div>
    // <div className='productCard'>
    //   <div className='cardFront'>
    //     <div className='productImg'>
    //       <img srcSet={imgSrc} alt={`${name} picture`} />
    //     </div>
    //     <div className='productName'>{name}</div>
    //   </div>
    //   <div className='cardBack'>
    //     <div className='cardbtn'>Add To Chart</div>
    //   </div>
    // </div>
  )
}

export default Index
