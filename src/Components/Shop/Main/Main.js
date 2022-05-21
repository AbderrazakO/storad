import { useState, useEffect } from 'react'
import Card from '../Card/ShopCard'
import ShowF from './ShowFilter/ShowFilter'
import { connect } from 'react-redux'

const Main = ({ store }) => {
  return (
    <div className='mainSection'>
      <ShowF />
      <div className='cards'>
        {store ? (
          store.map((el) => {
            const { Id, Name, Price, Img, Brand } = el
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
const mapStateToProps = (state) => {
  return { store: state.store }
}
export default connect(mapStateToProps)(Main)
