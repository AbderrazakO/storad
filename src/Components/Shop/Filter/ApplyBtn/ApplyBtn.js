import { useState, useEffect } from 'react'
import { updateProducts } from '../../../../Assets/data/store'
import { trackFilter } from '../../../../Assets/data/setFilter'

const ApplyBtn = () => {
  const [asFilter, setAsFilter] = useState([])
  useEffect(() => {
    trackFilter.subscribe((el) => {
      setAsFilter(el)
    })
  })
  console.log(asFilter)
  return (
    <button
      className='filterBtn'
      onClick={() => {
        asFilter.forEach((e) => updateProducts(e.from, e.option))
      }}
    >
      Apply Filter
    </button>
  )
}

export default ApplyBtn
