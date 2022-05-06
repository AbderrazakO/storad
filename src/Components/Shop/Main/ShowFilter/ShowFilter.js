import { useEffect, useState } from 'react'
import {
  trackFilter,
  removeFromFilter,
} from '../../../../Assets/data/setFilter'

const ShowFilter = () => {
  const [filter, setFilter] = useState({})
  useEffect(() => {
    trackFilter.subscribe((el) => setFilter(el))

    Object.values(filter).forEach((e) => {
      e.map((el) => {
        console.log(el)
      })
    })
  })
  // return <div className='itemBtn'>Hello</div>
  //
  return (
    <div className='showFiltersSection'>
      {Object.values(filter).forEach((e) => {
        e.map((el) => {
          return (
            <button
              className='itemBtn'
              onClick={() => {
                removeFromFilter()
              }}
            >
              {el}
            </button>
          )
        })
      })}
    </div>
  )
}

export default ShowFilter
