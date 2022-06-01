const Index = () => {
  return (
    <div className='categoriesSection'>
      <div className='sectionTitle'>
        Popular <span> Categories</span>
      </div>
      <div className='categoriesMain'>
        <div className='categoriesCard'>
          <img
            srcSet={`https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80`}
            alt='categories Card 1'
          />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img
            srcSet={`https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80`}
            alt='categories Card 2'
          />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img
            srcSet={`https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
            alt='categories Card 3'
          />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img
            srcSet={`https://images.unsplash.com/photo-1584735175097-719d848f8449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80`}
            alt='categories Card 4'
          />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img
            srcSet={`https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80`}
            alt='categories Card 5'
          />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img
            srcSet={`https://images.unsplash.com/photo-1549660299-31c4ea5f34c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80`}
            alt='categories Card 6'
          />
          <div className='cardBtn'>View Details</div>
        </div>
      </div>
    </div>
  )
}

export default Index
