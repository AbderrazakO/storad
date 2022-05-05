const Index = ({ imgSrc, name = 'Untitled', price = 0 }) => {
  //
  return (
    <div className='productCard shopCard'>
      <div className='cardImg'>
        <img srcSet={imgSrc} alt={`${name} picture`} width='250' height='200' />
      </div>
      <div className='productInfo'>
        <div className='productName'>{name}</div>
        <div className='productPrice'>{`${price} $`}</div>
      </div>
    </div>
  )
}

export default Index
