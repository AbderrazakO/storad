import React from 'react'

const Index = () => {
  return (
    <div className='aboutSection'>
      <h1 className='sectionTitle'>
        Why Stor<span>ad</span>
      </h1>
      <p className='storeDescription'>
        Because consumer happiness is our priority, we have collected for you
        all the brands you love in one store at reasonable prices.
      </p>
      <div className='cardBox'>
        <div className='card'>
          <div className='value'>
            1M<span>+</span>
          </div>
          <div className='description'>Customers</div>
        </div>
        <div className='card'>
          <div className='value'>
            50M<span>+</span>
          </div>
          <div className='description'>Monthly Order</div>
        </div>
        <div className='card'>
          <div className='value'>95%</div>
          <div className='description'>Happy Customers</div>
        </div>
        <div className='card'>
          <div className='value'>
            3M<span>+</span>
          </div>
          <div className='description'>Social Followers</div>
        </div>
      </div>
    </div>
  )
}

export default Index
