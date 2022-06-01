import React from 'react'
import { connect } from 'react-redux'
import { ADDTOBAG } from '../../../../Redux/actions'

const CardBtn = ({
  productImg,
  brandName,
  productName = 'Untitled',
  productPrice = 0,
  AddToBag,
}) => {
  return (
    <div
      className='addBtn'
      aria-label='Add To Cart'
      onClick={() => {
        AddToBag(productImg, brandName, productName, productPrice)
      }}
    >
      Add To Cart
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddToBag: (productImg, brandName, productName, productPrice) =>
      dispatch({
        type: ADDTOBAG,
        ProductImg: productImg,
        BrandName: brandName,
        ProductName: productName,
        ProductPrice: productPrice,
      }),
  }
}

export default connect(null, mapDispatchToProps)(CardBtn)
