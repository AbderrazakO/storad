import { useRef, useEffect } from 'react'

const Table = () => {
  const plates = useRef(null)
  // (x + r cos(2kπ/n), y + r sin(2kπ/n))
  useEffect(() => {
    const platesChilds = plates.current.childNodes
    platesChilds.forEach((element) => {
      const numbreOfPlate = platesChilds.length
      console.log(element, numbreOfPlate)
      // element.style.left = x + 'px'
      // element.style.top = y + 'px'
    })
  }, [plates])

  return (
    <div className='tableContainer'>
      <div className='tableWrapper'>
        <div className='mainTable'>cool</div>
        <div ref={plates} className='plateContainer'>
          <div className='plate'>HHH</div>
          <div className='plate'>HHH</div>
          <div className='plate'>HHH</div>
        </div>
      </div>
    </div>
  )
}

export default Table
