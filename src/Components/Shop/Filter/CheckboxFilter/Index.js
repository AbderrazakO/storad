import { useState, useRef } from 'react'
import { ArrowUp, ArrowDown } from './icons'
import { v4 as uuid } from 'uuid'
import { addToFilter } from '../../../../Assets/data/setFilter'

const Index = ({ title = 'Untitled', options = [] }) => {
  const [check, setCheck] = useState(false)
  const [isDown, setIsDown] = useState(false)
  const dropBox = useRef(null)
  const boxStyle = isDown
    ? { height: 'max-content', padding: '0.75rem 1rem' }
    : { height: '0', padding: '0' }

  //
  return (
    <div className='dropDownBox'>
      <button
        className='dropBoxHeader'
        onClick={() => {
          isDown ? setIsDown(false) : setIsDown(true)
        }}
      >
        <div className='dropTitle'>{title}</div>
        <div className='dropIcon'>{isDown ? <ArrowDown /> : <ArrowUp />}</div>
      </button>
      <div ref={dropBox} className='dropWrapper' style={boxStyle}>
        {options.map((el) => {
          return (
            <div key={uuid()} className='dropRow'>
              <input
                type='checkbox'
                name={el}
                id={`lab${el}`}
                className='checkboxInput'
                onChange={(event) => {
                  if (event.currentTarget.checked) {
                    const newObject = { from: `${title}`, option: `${el}` }
                    addToFilter(newObject)
                    // alert(`${el} from ${title} is checked`)
                  } else {
                    alert('not checked')
                  }
                }}
              />
              <label htmlFor={`lab${el}`} className='checkboxLabel'>
                {el}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Index
