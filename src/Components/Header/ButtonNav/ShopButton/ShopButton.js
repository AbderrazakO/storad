import { useState } from 'react'

const ShopButton = () => {
  const [bagDisplay, setBagDisplay] = useState('none')
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
      <div className='popUpWrapper' style={{ display: bagDisplay }}>
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
          <div className='specialCard'>
            <div className='rowOne'>Subtotal</div>
            <div className='rowTwo'>XXXX</div>
            <div className='rowOne'>Delivery</div>
            <div className='rowTwo'>XXXX</div>
            <div className='rowOne'>Total</div>
            <div className='rowTwo'>€324.95</div>
          </div>
          <div className='otherCards'>
            {/*  */}
            <div className='bagCard'>
              <div className='cardImg'>
                <img
                  src='https://images.unsplash.com/photo-1615485737457-f07082c77813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt='lol'
                />
              </div>
              <div className='infoBox'>
                <div className='productName'>2022 PRO KIT</div>
                <div className='productPrice'>€69.99</div>
                <div className='productQuantity'>Quantity : 2</div>
              </div>
              <div className='cardBtnBox'>
                <button className='bagBtn'>
                  <PlusIcon />
                </button>
                <button className='bagBtn'>
                  <MinusIcon />
                </button>
                <button className='bagBtn'>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className='bagCard'>
              <div className='cardImg'>
                <img
                  src='https://images.unsplash.com/photo-1615485737457-f07082c77813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt='lol'
                />
              </div>
              <div className='infoBox'>
                <div className=''>2022 PRO KIT</div>
                <div className=''>€69.99</div>
                <div className=''>Quantity: 2</div>
              </div>
              <div className='cardBtnBox'>
                <button className='bagBtn'>
                  <PlusIcon />
                </button>
                <button className='bagBtn'>
                  <MinusIcon />
                </button>
                <button className='bagBtn'>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className='bagCard'>
              <div className='cardImg'>
                <img
                  src='https://images.unsplash.com/photo-1615485737457-f07082c77813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt='lol'
                />
              </div>
              <div className='infoBox'>
                <div className=''>2022 PRO KIT</div>
                <div className=''>€69.99</div>
                <div className=''>Quantity: 2</div>
              </div>
              <div className='cardBtnBox'>
                <button className='bagBtn'>
                  <PlusIcon />
                </button>
                <button className='bagBtn'>
                  <MinusIcon />
                </button>
                <button className='bagBtn'>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className='bagCard'>
              <div className='cardImg'>
                <img
                  src='https://images.unsplash.com/photo-1615485737457-f07082c77813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt='lol'
                />
              </div>
              <div className='infoBox'>
                <div className=''>2022 PRO KIT</div>
                <div className=''>€69.99</div>
                <div className=''>Quantity: 2</div>
              </div>
              <div className='cardBtnBox'>
                <button className='bagBtn'>
                  <PlusIcon />
                </button>
                <button className='bagBtn'>
                  <MinusIcon />
                </button>
                <button className='bagBtn'>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className='bagCard'>
              <div className='cardImg'>
                <img
                  src='https://images.unsplash.com/photo-1615485737457-f07082c77813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt='lol'
                />
              </div>
              <div className='infoBox'>
                <div className=''>2022 PRO KIT</div>
                <div className=''>€69.99</div>
                <div className=''>Quantity: 2</div>
              </div>
              <div className='cardBtnBox'>
                <button className='bagBtn'>
                  <PlusIcon />
                </button>
                <button className='bagBtn'>
                  <MinusIcon />
                </button>
                <button className='bagBtn'>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className='bagCard'>
              <div className='cardImg'>
                <img
                  src='https://images.unsplash.com/photo-1615485737457-f07082c77813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt='lol'
                />
              </div>
              <div className='infoBox'>
                <div className=''>2022 PRO KIT</div>
                <div className=''>€69.99</div>
                <div className=''>Quantity: 2</div>
              </div>
              <div className='cardBtnBox'>
                <button className='bagBtn'>
                  <PlusIcon />
                </button>
                <button className='bagBtn'>
                  <MinusIcon />
                </button>
                <button className='bagBtn'>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className='bagCard'>
              <div className='cardImg'>
                <img
                  src='https://images.unsplash.com/photo-1615485737457-f07082c77813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt='lol'
                />
              </div>
              <div className='infoBox'>
                <div className=''>2022 PRO KIT</div>
                <div className=''>€69.99</div>
                <div className=''>Quantity: 2</div>
              </div>
              <div className='cardBtnBox'>
                <button className='bagBtn'>
                  <PlusIcon />
                </button>
                <button className='bagBtn'>
                  <MinusIcon />
                </button>
                <button className='bagBtn'>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className='bagCard'>
              <div className='cardImg'>
                <img
                  src='https://images.unsplash.com/photo-1615485737457-f07082c77813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt='lol'
                />
              </div>
              <div className='infoBox'>
                <div className=''>2022 PRO KIT</div>
                <div className=''>€69.99</div>
                <div className=''>Quantity: 2</div>
              </div>
              <div className='cardBtnBox'>
                <button className='bagBtn'>
                  <PlusIcon />
                </button>
                <button className='bagBtn'>
                  <MinusIcon />
                </button>
                <button className='bagBtn'>
                  <CloseIcon />
                </button>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
        <div className='bagFooter'>
          <button className='bagBtn'>Clear All</button>
          <button className='bagBtn'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default ShopButton

const ShopIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z'></path>
    </svg>
  )
}

const CloseIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'></path>
    </svg>
  )
}

const PlusIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      t='1551322312294'
      viewBox='0 0 1024 1024'
      version='1.1'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <defs></defs>
      <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
      <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
    </svg>
  )
}

const MinusIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 1024 1024'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z'></path>
    </svg>
  )
}
