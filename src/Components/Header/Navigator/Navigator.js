import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigator = () => {
  let [active, setActive] = useState(['active', '', '', ''])

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
          href='#'
          onClick={() => {
            activeLink(0)
          }}
        >
          Home
        </Link>
        <Link
          to='/shop'
          className={`link ${active[1]}`}
          href='#'
          onClick={() => {
            activeLink(1)
          }}
        >
          Shop
        </Link>
        <Link
          to='/contact'
          className={`link ${active[2]}`}
          href='#'
          onClick={() => {
            activeLink(2)
          }}
        >
          Contact
        </Link>
        <Link
          to='/help'
          className={`link ${active[3]}`}
          href='#'
          onClick={() => {
            activeLink(3)
          }}
        >
          Help
        </Link>
      </div>
    </>
  )
}

export default Navigator
