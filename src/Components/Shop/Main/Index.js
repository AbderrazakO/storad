import { useState, useEffect } from 'react'
import Card from '../Card/ShopCard'
import { trackProducts } from '../../../Assets/data/store'
import { trackStaticProducts } from '../../../Assets/data/staticStore'
import ShowF from './ShowFilter/ShowFilter'

const Index = () => {
  const [store, setStore] = useState([])
  const [staticStore, setStaticStore] = useState([])

  useEffect(() => {
    trackProducts.subscribe((el) => setStore(el))
  })
  useEffect(() => {
    trackStaticProducts.subscribe((el) => setStore(el))
  })
  // console.log(store)
  return (
    <div className='mainSection'>
      <ShowF />
      <div className='cards'>
        {store ? (
          store.map((el) => {
            console.log(store)
            console.log(staticStore)
            const {
              Id,
              Name,
              Price,
              Img,
              Brand,
              Category,
              Size,
              Color,
              Width,
            } = el

            return (
              <Card
                key={Id}
                brandName={Brand}
                productName={Name}
                productImg={Img[0]}
                productPrice={Price}
              />
            )
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Index
