import React from 'react'
import { TrashIcon } from './icon'
import { resetFilter } from '../../../../Data/Filter'

const ResetBtn = () => {
  return (
    <button
      className='filterIcon'
      onClick={() => {
        resetFilter()
      }}
    >
      <TrashIcon />
    </button>
  )
}

export default ResetBtn
