import { useEffect, useRef, useState } from 'react'

const Index = () => {
  const leftPoint = useRef(null)
  const ligne = useRef(null)
  const rightPoint = useRef(null)
  const [leftDown, setLeftDown] = useState(false)
  const startX = useRef(0) // Get Mouse Down Position
  const endX = useRef(0) // Get Mouse On Mouve Position

  // Set Ligne Position
  useEffect(() => {
    const startPoint = leftPoint.current.offsetLeft
    ligne.current.style.left = `${startPoint}px`
    const endPoint = rightPoint.current.offsetLeft
    ligne.current.style.width = `${endPoint}px`
  })

  // Set Mouse Events
  const mousedown = (event) => {
    startX.current = event.pageX - leftPoint.current.offsetLeft // Get Mouse Initial Position
    setLeftDown(true)
  }

  const mouseup = (event) => {
    setLeftDown(false)
  }

  const mousemove = (event) => {
    event.preventDefault()

    endX.current = event.pageX // Set Cursor Position
    const endPoint = rightPoint.current.offsetLeft
    const startPoint = leftPoint.current.offsetLeft
    //
    if (!leftDown || startPoint >= endPoint || startPoint < 0) return
    leftPoint.current.style.left = `${endX.current - startX.current}px` // Move Slider
    ligne.current.style.left = `${startPoint}px`
    // }
  }

  // Add Mouse Events
  useEffect(() => {
    //
    leftPoint.current.addEventListener('mousedown', mousedown)
    leftPoint.current.addEventListener('mousemove', mousemove)
    leftPoint.current.addEventListener('mouseup', mouseup)

    //
    // rightPoint.current.addEventListener('mousedown', mousedown)
    // rightPoint.current.addEventListener('mousemove', mousemove)
    // rightPoint.current.addEventListener('mouseup', mouseup)
    // rightPoint.current.addEventListener('mouseleave', mouseleave)

    return () => {
      //
      leftPoint.current.removeEventListener('mousedown', mousedown)
      leftPoint.current.removeEventListener('mousemove', mousemove)
      leftPoint.current.removeEventListener('mouseup', mouseup)

      //
      // rightPoint.current.removeEventListener('mousedown', mousedown)
      // rightPoint.current.removeEventListener('mousemove', mousemove)
      // rightPoint.current.removeEventListener('mouseup', mouseup)
      // rightPoint.current.removeEventListener('mouseleave', mouseleave)
    }
  })

  //
  return (
    <div className='DragableFilter'>
      <div className='dragFilterTitle'>{`Price`}</div>
      <div className='valueBox'>
        <div className='cardValue'>
          From <span>250</span> $
        </div>
        <div className='cardValue'>
          Up To <span>3490</span> $
        </div>
      </div>
      <div className='dragAria'>
        <div ref={leftPoint} className='leftPoint'></div>
        <div ref={ligne} className='ligne'></div>
        <div ref={rightPoint} className='rightPoint'></div>
      </div>
    </div>
  )
}

export default Index
