import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigator = ({ initialeState = ['active', '', ''] }) => {
  let [active, setActive] = useState(initialeState)

  let activeLink = (id) => {
    let newList = []
    for (let i = 0; i < 4; i++) {
      if (i === id) {
        newList.push('active')
      } else newList.push('')
    }
    setActive(newList)
  }
  return (
    <>
      <div className='sectionsNav'>
        <Link
          to='/'
          className={`link ${active[0]}`}
          onClick={() => {
            activeLink(0)
          }}
        >
          Home
        </Link>
        <Link
          to='/shop'
          className={`link ${active[1]}`}
          onClick={() => {
            activeLink(1)
          }}
        >
          Shop
        </Link>

        <Link
          to='/about'
          className={`link ${active[2]}`}
          onClick={() => {
            activeLink(2)
          }}
        >
          About
        </Link>
      </div>
    </>
  )
}

export default Navigator
