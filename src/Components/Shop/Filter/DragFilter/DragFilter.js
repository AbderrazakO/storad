import { useEffect, useRef, useState } from 'react'
import { trackAria, updateAria } from '../../../../Data/DragFilter'

const Index = ({ minValue = 0, maxValue = 1000 }) => {
  const [filter, setFilter] = useState({})
  const leftPoint = useRef(null)
  const progress = useRef(null)
  const rightPoint = useRef(null)
  const minInput = useRef(null)
  const maxInput = useRef(null)

  useEffect(() => {
    trackAria.subscribe((el) => setFilter(el))
    updateAria(minInput.current.value, maxInput.current.value)
  })
  //
  useEffect(() => {
    leftPoint.current.value = maxValue * 0
    rightPoint.current.value = maxValue * 1
    minInput.current.value = maxValue * 0
    maxInput.current.value = maxValue * 1
    // updateAria(minInput.current.value, maxInput.current.value)
  }, [])
  //
  useEffect(() => {
    const minValueP = (leftPoint.current.value / leftPoint.current.max) * 100
    const maxValueP =
      100 - (rightPoint.current.value / rightPoint.current.max) * 100

    progress.current.style.left = `${minValueP}%`
    progress.current.style.right = `${maxValueP}%`
    minInput.current.value = minValueP * minValue
    // console.log(minValueP, maxValueP)
    // updateAria(minValueP, maxValueP)
  })

  //
  const setProgress = () => {
    const minValueP = (leftPoint.current.value / leftPoint.current.max) * 100
    const maxValueP =
      100 - (rightPoint.current.value / rightPoint.current.max) * 100

    // console.log(
    //   `Value One : ${maxValueP - minValueP} | Value Two : ${
    //     maxValueP - maxValue
    //   }`
    // )
    if (maxValueP - minValueP > maxValue) {
      leftPoint.current.value = maxValueP - maxValue
    } else {
      progress.current.style.left = `${minValueP}%`
      progress.current.style.right = `${maxValueP}%`
      minInput.current.value = (minValueP / 100) * maxValue
      maxInput.current.value = ((100 - maxValueP) / 100) * maxValue
    }

    // console.log(minValueP * maxValue)
  }

  //
  const setLeftPoint = (e) => {
    e.preventDefault()
    if (e.target.value >= maxValue || !e.target.value || e.target.value < 0)
      return
    leftPoint.current.value = e.target.value
    progress.current.style.left = `${(e.target.value / maxValue) * 100}%`
    // console.log(e.target.value)
  }

  const setRightPoint = (e) => {
    e.preventDefault()
    if (e.target.value >= maxValue || !e.target.value || e.target.value < 0)
      return
    rightPoint.current.value = e.target.value
    progress.current.style.right = `${100 - (e.target.value / maxValue) * 100}%`
    // console.log(e.target.value)
  }

  return (
    <div className='DragableFilter'>
      <div className='dragFilterTitle'>{`Price`}</div>
      <div className='valueBox'>
        <div className='cardValue'>
          From
          <input
            ref={minInput}
            type='number'
            name=''
            id=''
            className='newMinValue'
            onChange={(e) => {
              setLeftPoint(e)
            }}
          />
          $
        </div>
        <div className='cardValue'>
          Up To
          <input
            ref={maxInput}
            type='number'
            name=''
            id=''
            className='newMaxValue'
            onChange={(e) => {
              setRightPoint(e)
            }}
          />
          $
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
