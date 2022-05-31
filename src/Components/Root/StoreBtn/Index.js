import { useState } from 'react'
import { ShopIcon, CloseIcon } from './icon'
import { connect } from 'react-redux'
import { REMOVEITEM } from '../../../Redux/actions'

const ShopButton = ({ Bag = [], RemoveItem }) => {
  const [bagDisplay, setBagDisplay] = useState('none')
  const totalValue = (arr) => {
    let count = 0
    arr.forEach((element) => {
      count += element.price
    })
    return count.toFixed(2)
  }
  //
  return (
    <div className='popUpContainer'>
      <div
        className='popUpButton'
        onClick={() => {
          setBagDisplay('flex')
        }}
      >
        {!Bag.length ? (
          <></>
        ) : (
          <div className='notificationIcon'>{Bag.length}</div>
        )}
        <ShopIcon />
      </div>

      <div className='bagContainer' style={{ display: bagDisplay }}>
        <div className='bagWrapper'>
          <div className='bagHeader'>
            <div className='bagTitle'>Your Bag</div>
            <div
              className='closeBtn'
              onClick={() => {
                setBagDisplay('none')
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className='bagMain'>
            {Bag ? (
              Bag.map((e) => {
                const { id, name, imgSrc, price } = e
                return (
                  <div key={id} className='bagCard'>
                    <div className='cardImg'>
                      <img alt={`${name} image`} srcSet={imgSrc} />
                    </div>
                    <div className='productDetails'>
                      <div className='pRow productName'>{name}</div>
                      <div className='pRow productPrice'>
                        {price} <span>$</span>
                      </div>
                      <div className='pRow'>
                        <div className='box'>
                          <div className='cardBtn plusBtn'>+</div>
                          <div className='productQuantity'>2</div>
                          <div className='cardBtn minusBtn'>-</div>
                        </div>
                        <button
                          className='cardBtn'
                          onClick={() => {
                            RemoveItem(id)
                          }}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              <></>
            )}
          </div>
          <div className='bagFooter'>
            <div className='bagFrow'>
              <div className='rowTitle'>Total :</div>
              <div className='rowValue'>{`$${!Bag ? 0 : totalValue(Bag)}`}</div>
            </div>
            <button className='bagBtn'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    RemoveItem: (id) =>
      dispatch({
        type: REMOVEITEM,
        Id: id,
      }),
  }
}

const mapStateToProps = (state) => {
  return { Bag: [...state.bag] }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopButton)
