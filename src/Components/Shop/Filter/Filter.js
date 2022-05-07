import { useState, useEffect } from 'react'

import { ArrowDown, FilterIcon } from './icon'
import Check from './CheckboxFilter/CheckboxFilter'
import Drag from './DragFilter/DragFilter'
import ABtn from './ApplyBtn/ApplyBtn'
import RBtn from './ResetBtn/ResetBtn'
import { trackFilterOptions } from '../../../Assets/data/filter'

const Index = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    trackFilterOptions.subscribe((item) => {
      setData(item)
    })
  })

  //
  return (
    <div className='filterSection'>
      <input type='checkbox' name='wrapper' id='showFilterBtn' />
      <label htmlFor='showFilterBtn' className='showBtn'>
        <div className='filterIcon'>
          <FilterIcon />
        </div>
        <div className='showIcon'>
          <ArrowDown />
        </div>
      </label>
      <section className='filterWrapper'>
        <Drag />
        {data.map((el) => {
          const { id, title, options } = el
          return <Check key={id} title={title} options={options} />
        })}
        <ABtn />
        <RBtn />
      </section>
    </div>
  )
}

export default Index
