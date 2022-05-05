import { TrashIcon, ArrowDown, FilterIcon } from './icon'
import Check from './CheckboxFilter/Index'
import Drag from './DragFilter/Index'
import ABtn from './ApplyBtn/ApplyBtn'
import RBtn from './ResetBtn/ResetBtn'
import { filterArray } from '../../../Assets/data/filter'

const Index = () => {
  // console.log(filterArray)
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
        {filterArray.map((el) => {
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
