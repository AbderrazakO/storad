import { useState, useEffect } from 'react'
import Card from '../Card/ShopCard'
import ShowF from './ShowFilter/ShowFilter'
import { trackStore } from '../../../Data/Store'
import { trackAria } from '../../../Data/DragFilter'
// import { trackStaticProducts } from '../../../Assets/data/staticStore'

const Main = () => {
  const [filterDrag, setFilterDrag] = useState({})
  const [store, setStore] = useState([])
  // const [staticStore, setStaticStore] = useState([])

  useEffect(() => {
    trackStore.subscribe((el) => setStore(el))
  }, [trackStore])

  //
  useEffect(() => {
    trackAria.subscribe((el) => setFilterDrag(el))
  })
  // useEffect(() => {
  //   trackStaticProducts.subscribe((el) => setStaticStore(el))
  // }, [trackStaticProducts])
  // console.log(store)
  // useEffect(() => {
  //   let newArray = []
  //   store.forEach((e) => newArray.push(e.Id))
  //   setFilterID(newArray)
  // }, [store])

  return (
    <div className='mainSection'>
      <ShowF />
      <div className='cards'>
        {store ? (
          store.map((el) => {
            const { Id, Name, Price, Img, Brand } = el
            // console.log(Price > 50)
            // if (Id in filterID && staticStore.length != filterID.length) return
            console.log(filterDrag)
            if (Price <= filterDrag.min || Price >= filterDrag.max) return <></>
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

export default Main
