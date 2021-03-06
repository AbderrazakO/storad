import React, { useState, useEffect } from 'react'
import Card from '../Card/ShopCard'
import { connect } from 'react-redux'

const Main = ({ store = [], filter }) => {
  return (
    <div className='mainSection'>
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
          <>Sorry, there is no matching product</>
        )}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  const data1 = [...state.store]
  const data2 = [...state.filter]
  // console.log(data2)
  return { store: data1, filter: data2 }
}
export default connect(mapStateToProps, null)(Main)
