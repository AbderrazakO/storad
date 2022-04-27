import React from 'react'

const Index = ({ imgSrc, name = 'Untitled' }) => {
  return (
    <div className='productCard'>
      <div className='cardFront'>
        <img srcSet={imgSrc} alt={`${name} picture`} />
        <div className='productName'>{name}</div>
      </div>
      <div className='cardBack'>
        <div className='cardbtn'>Add To Chart</div>
      </div>
    </div>
  )
}

export default Index
