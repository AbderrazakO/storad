import { useState, useEffect } from 'react'
import { ShopIcon, CloseIcon } from './icon'
import { trackBag, removeFromBag, addToBag } from '../../../Data/Bag'

const ShopButton = () => {
  // console.log('hi')
  const [bagDisplay, setBagDisplay] = useState('none')
  const [newBag, setNewBag] = useState([])
  useEffect(() => {
    trackBag.subscribe((el) => {
      setNewBag(el)
    })
  })
  // console.log(newBag)
  //
  return (
    <div className='popUpContainer'>
      <div
        className='popUpButton'
        onClick={() => {
          setBagDisplay('flex')
        }}
      >
        {newBag.length ? (
          <div className='notificationIcon'>{newBag.length}</div>
        ) : (
          <></>
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
            {newBag ? (
              newBag.map((e) => {
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
                            console.log(id)
                            removeFromBag(id)
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
              <div className='rowValue'>{`$ 32 `}</div>
            </div>
            <button className='bagBtn'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopButton
