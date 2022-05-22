import { useState, useRef } from 'react'
import { ArrowUp, ArrowDown } from './icons'
import { connect } from 'react-redux'
import { UPDATE } from '../../../../Redux/actions'

const Index = ({ title = 'Untitled', options = [], Update }) => {
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
          const { id, name, isChecked } = el
          return (
            <div key={id} className='dropRow'>
              <input
                type='checkbox'
                name={name}
                id={`lab${name}`}
                className='checkboxInput'
                defaultChecked={isChecked}
                onChange={(event) => {
                  if (event.currentTarget.checked) {
                    Update(title, id, true)
                    // console.log(key)
                  } else {
                    Update(title, id, false)
                  }
                }}
              />
              <label htmlFor={`lab${name}`} className='checkboxLabel'>
                {name}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
//
const mapDispatchToProps = (dispatch) => {
  return {
    Update: (title, id, status) =>
      dispatch({ type: UPDATE, title, id, status }),
  }
}

export default connect(null, mapDispatchToProps)(Index)
