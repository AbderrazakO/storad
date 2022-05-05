import { useState, useEffect } from 'react'
import Card from '../Card/ShopCard'
import { trackProducts } from '../../../Assets/data/store'
import { v4 as uuid } from 'uuid'

const Index = () => {
  const [store, setStore] = useState([])
  useEffect(() => {
    trackProducts.subscribe((el) => setStore(el))
  })
  console.log(store)
  return (
    <div className='mainSection'>
      {store ? (
        store.map((el) => {
          const { element } = el
          return element.map((item) => {
            const { name, imgSrc, price } = item
            return (
              <Card key={uuid()} imgSrc={imgSrc} name={name} price={price} />
            )
          })
        })
      ) : (
        <></>
      )}
    </div>
  )
}

export default Index
