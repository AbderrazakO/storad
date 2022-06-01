import React from 'react'
import { TrashIcon } from './icon'
import { connect } from 'react-redux'
import { RESET_FILTER } from '../../../../Redux/actions'

const ResetBtn = ({ ResetFilter }) => {
  return (
    <button
      className='filterIcon'
      aria-label='Reset Filter'
      onClick={() => {
        ResetFilter()
      }}
    >
      <TrashIcon />
    </button>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    ResetFilter: () => dispatch({ type: RESET_FILTER }),
  }
}
export default connect(null, mapDispatchToProps)(ResetBtn)
