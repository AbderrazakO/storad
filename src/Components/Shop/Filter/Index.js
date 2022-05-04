import React from 'react'
import { TrashIcon } from './icon'
import Check from './CheckboxFilter/Index'
import Drag from './DragFilter/Index'
import { filterArray } from '../../../Assets/data/filter'

const Index = () => {
  // console.log(filterArray)
  return (
    <div className='filterSection'>
      <input type='checkbox' name='wrapper' id='showFilterBtn' />
      <label htmlFor='showFilterBtn' className='showBtn'>
        Lol
      </label>
      <section className='filterWrapper'>
        <Drag />
        {filterArray.map((el) => {
          const { id, title, options } = el
          return <Check key={id} title={title} options={options} />
        })}
        <button className='filterBtn'>Apply Filter</button>
        <button className='filterIcon'>
          <TrashIcon />
        </button>
      </section>
    </div>
  )
}

export default Index
