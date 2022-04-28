import { useState, useEffect } from 'react'
import { MinusIcon, ShopIcon, CloseIcon, PlusIcon } from './icon'
import { trackBag, removeFromBag, addToBag } from '../../../Assets/data/bag'

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
        <ShopIcon />
      </div>
      {newBag.length ? (
        <div className='notificationIcon'>{newBag.length}</div>
      ) : (
        <></>
      )}

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
                const { id, name, imgSrc } = e
                return (
                  <div key={id} className='bagCard'>
                    <div className='cardImg'>
                      <img alt={`${name} image`} srcSet={imgSrc} />
                    </div>
                    {name}
                  </div>
                )
              })
            ) : (
              <></>
            )}
          </div>
          <div className='bagFooter'>
            <div>
              Total <span>32$</span>
            </div>
            <button className='bagBtn'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopButton
