import { useState, useEffect } from 'react'
import { updateProducts } from '../../../../Data/Store'
import { trackFilterOptions } from '../../../../Data/Filter'

const ApplyBtn = () => {
  const [asFilter, setAsFilter] = useState({})
  useEffect(() => {
    trackFilterOptions.subscribe((el) => {
      setAsFilter(el)
    })
  })

  return (
    <button
      className='filterBtn'
      onClick={() => {
        asFilter.forEach((e) => {
          let newArray = []
          e.options.forEach((el) => {
            if (el.isChecked) {
              newArray.push(el.name)
            }
          })
          updateProducts(e.title, newArray)
        })
      }}
    >
      Apply Filter
    </button>
  )
}

export default ApplyBtn
