import React from 'react'
import { TrashIcon } from './icon'
import Check from './CheckboxFilter/Index'
import { filterArray } from '../../../Assets/data/filter'

const Index = () => {
  console.log(filterArray)
  return (
    <div className='filterSection'>
      <div className='filterMain'>
        {filterArray.map((el) => {
          const { id, title, options } = el
          return <Check key={id} title={title} options={options} />
        })}
      </div>
      <div className='filterFooter'>
        <div className='filterBtn'>Apply Filter</div>
        <div className='filterIcon'>
          <TrashIcon />
        </div>
      </div>
    </div>
  )
}

export default Index
