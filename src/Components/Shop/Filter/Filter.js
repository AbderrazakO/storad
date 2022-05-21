import { ArrowDown, FilterIcon } from './icon'
import Check from './CheckboxFilter/CheckboxFilter'
import Drag from './DragFilter/DragFilter'
import ABtn from './ApplyBtn/ApplyBtn'
import RBtn from './ResetBtn/ResetBtn'
import { connect } from 'react-redux'
import { INCREMENT } from '../../../Redux/actions'

const Index = ({ data, dispatch }) => {
  //
  console.log(dispatch)
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
        <Drag minValue={0} maxValue={200} />
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
//
const mapStateToProps = (state) => {
  // console.log(state.filter)
  return { data: state.filter }
}
//
const mapDispatchToProps = (dispatch) => {
  return { lol: () => dispatch({ type: INCREMENT }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
