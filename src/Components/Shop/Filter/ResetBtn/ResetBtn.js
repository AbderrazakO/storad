import React from 'react'
import { TrashIcon } from './icon'

const ResetBtn = () => {
  return (
    <button
      className='filterIcon'
      onClick={() => {
        // resetFilter()
      }}
    >
      <TrashIcon />
    </button>
  )
}

export default ResetBtn
