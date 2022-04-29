import { useEffect, useState } from 'react'
import Header from '../../Components/Main/HomeHeader/HomeHeader'
import Card from '../../Components/Main/Card/Index'
import Slider from '../../Components/Main/DragSlider/Index'
import { trackProducts } from '../../Assets/data/store'

//
import Brands from '../../Components/Home/Brands/Index'
import Categories from '../../Components/Home/Categories/Index'

const Index = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    trackProducts.subscribe((element) => {
      setProducts(element)
    })
  }, [])
  // console.log(products ? products : 'Hi')
  //
  return (
    <main>
      <Brands />
      <Categories />
      <Header />
      {products ? (
        products.map((slide) => {
          // console.log(slide)
          const { id, category, element } = slide
          return (
            <Slider
              key={id}
              title={category}
              cards={element.map((e) => {
                const { id, name, imgSrc, price, weight } = e

                return (
                  <Card key={id} imgSrc={imgSrc} name={name} price={price} />
                )
              })}
            />
          )
        })
      ) : (
        <></>
      )}
      {/* <Brands /> */}
    </main>
  )
}

export default Index
