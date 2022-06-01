import { useState } from 'react'
import { ShopIcon, CloseIcon } from './icon'
import { connect } from 'react-redux'
import { REMOVEITEM, INCREMENT, DECREMENT } from '../../../Redux/actions'

const ShopButton = ({ Bag = [], RemoveItem, Increment, Decrement }) => {
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
      <button
        className='popUpButton'
        aria-label='Bag icon'
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
      </button>

      <div className='bagContainer' style={{ display: bagDisplay }}>
        <div className='bagWrapper'>
          <div className='bagHeader'>
            <div className='bagTitle'>Your Bag</div>
            <button
              className='closeBtn'
              aria-label='Close Bag'
              onClick={() => {
                setBagDisplay('none')
              }}
            >
              <CloseIcon />
            </button>
          </div>
          <div className='bagMain'>
            {Bag ? (
              Bag.map((e) => {
                const { id, name, imgSrc, price, quantity } = e
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
                          <button
                            className='cardBtn plusBtn'
                            aria-label=' Increment Btn'
                            onClick={() => {
                              Increment(id)
                            }}
                          >
                            +
                          </button>
                          <div className='productQuantity'>{quantity}</div>
                          <button
                            className='cardBtn minusBtn'
                            aria-label='Decrement Btn'
                            onClick={() => {
                              Decrement(id)
                            }}
                          >
                            -
                          </button>
                        </div>
                        <button
                          className='cardBtn'
                          aria-label='Remove Btn'
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
            <button className='bagBtn' aria-label='Checkout'>
              Checkout
            </button>
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
    Increment: (id) =>
      dispatch({
        type: INCREMENT,
        Id: id,
      }),
    Decrement: (id) =>
      dispatch({
        type: DECREMENT,
        Id: id,
      }),
  }
}

const mapStateToProps = (state) => {
  return { Bag: [...state.bag] }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopButton)
