// import { trackBag, addToBag } from '../../../Assets/data/bag'
import { v4 as uuid } from 'uuid'

const Index = ({ imgSrc, name = 'Untitled', price = 0 }) => {
  // const addBag = (name, price, imgSrc) => {
  //   const newObj = { id: uuid(), name, price, imgSrc }
  //   addToBag(newObj)
  //   // console.log(newObj)
  // }

  //
  return (
    <div className='productCard'>
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
