import { useRef, useEffect } from 'react'

const Table = () => {
  const plates = useRef(null)

  useEffect(() => {
    const platesChilds = plates.current.childNodes
    platesChilds.forEach((element) => {
      const numbreOfPlate = platesChilds.length
      // console.log(element, numbreOfPlate)
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
