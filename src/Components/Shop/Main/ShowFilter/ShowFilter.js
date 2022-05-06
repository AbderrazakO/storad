import { useEffect, useState } from 'react'
import { trackFilterOptions } from '../../../../Assets/data/filter'

const ShowFilter = () => {
  const [dataFilter, setDataFilter] = useState([])
  useEffect(() => {
    trackFilterOptions.subscribe((el) => setDataFilter(el))

    // console.log(dataFilter)
    //
    // filter.map((e) => {
    //   return e.options.map((el) => {
    //     !el.isChecked ? console.log(el.name) : console.log('')
    //   })
    // })
    //
  })
  // return <div className='itemBtn'>Hello</div>
  //
  return (
    <div className='showFiltersSection'>
      <div className='itemBtn'>Hello</div>
      {/* {filter.map((e) => {
        return e.options.map((el) => {
          el.isChecked ? <div className='itemBtn'>Hello</div> : <></>
        })
      })} */}
      {/* {Object.values(filter).forEach((e) => {
        e.map((el) => {
          return (
            <button
              className='itemBtn'
              onClick={() => {
                // removeFromFilter()
              }}
            >
              {el}
            </button>
          )
        })
      })} */}
    </div>
  )
}

export default ShowFilter
