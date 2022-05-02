import { useEffect, useRef, useState } from 'react'

const Index = ({ minValue = 0, maxValue = 1000 }) => {
  const leftPoint = useRef(null)
  const progress = useRef(null)
  const rightPoint = useRef(null)

  //
  useEffect(() => {
    const minValueP = (leftPoint.current.value / leftPoint.current.max) * 100
    const maxValueP =
      100 - (rightPoint.current.value / rightPoint.current.max) * 100

    progress.current.style.left = `${minValueP}%`
    progress.current.style.right = `${maxValueP}%`
  })

  //
  const setProgress = () => {
    const minValueP = (leftPoint.current.value / leftPoint.current.max) * 100
    const maxValueP =
      100 - (rightPoint.current.value / rightPoint.current.max) * 100

    progress.current.style.left = `${minValueP}%`
    progress.current.style.right = `${maxValueP}%`
  }

  return (
    <div className='DragableFilter'>
      <div className='dragFilterTitle'>{`Price`}</div>
      <div className='valueBox'>
        <div className='cardValue'>
          From <input type='text' name='' id='' /> $
        </div>
        <div className='cardValue'>
          Up To <input type='text' name='' id='' /> $
        </div>
      </div>
      <div className='dragAria'>
        <input
          ref={leftPoint}
          className='leftPoint'
          type='range'
          min={minValue}
          max={maxValue}
          onChange={setProgress}
        />
        <div ref={progress} className='progress'></div>
        <input
          ref={rightPoint}
          className='rightPoint'
          type='range'
          min={minValue}
          max={maxValue}
          onChange={setProgress}
        />
      </div>
    </div>
  )
}

export default Index
