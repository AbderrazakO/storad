import { useState, useEffect } from 'react'
import Card from '../Card/ShopCard'
import { trackProducts } from '../../../Assets/data/store'
import { trackStaticProducts } from '../../../Assets/data/staticStore'
import ShowF from './ShowFilter/ShowFilter'

const Index = () => {
  const [filterID, setFilterID] = useState([])
  const [store, setStore] = useState([])
  const [staticStore, setStaticStore] = useState([])

  useEffect(() => {
    trackProducts.subscribe((el) => setStore(el))
  }, [trackProducts])

  //
  useEffect(() => {
    trackStaticProducts.subscribe((el) => setStaticStore(el))
  }, [trackStaticProducts])
  // console.log(store)
  useEffect(() => {
    let newArray = []
    store.forEach((e) => newArray.push(e.Id))
    setFilterID(newArray)
  }, [store])

  return (
    <div className='mainSection'>
      <ShowF />
      <div className='cards'>
        {staticStore ? (
          staticStore.map((el) => {
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
            if (Id in filterID && staticStore.length != filterID.length) return
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
