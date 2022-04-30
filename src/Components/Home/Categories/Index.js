import I00 from '../../../Assets/images/categories/00.webp'
import I01 from '../../../Assets/images/categories/01.webp'
import I02 from '../../../Assets/images/categories/02.webp'
import I03 from '../../../Assets/images/categories/03.webp'
import I04 from '../../../Assets/images/categories/04.webp'
import I05 from '../../../Assets/images/categories/05.webp'

const Index = () => {
  return (
    <div className='categoriesSection'>
      <div className='sectionTitle'>
        <div className='partOne'>Popular</div>
        <div className='partTwo'>Categories</div>
      </div>
      <div className='categoriesMain'>
        <div className='categoriesCard'>
          <img srcSet={I00} />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img srcSet={I01} />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img srcSet={I02} />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img srcSet={I03} />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img srcSet={I04} />
          <div className='cardBtn'>View Details</div>
        </div>
        <div className='categoriesCard'>
          <img srcSet={I05} />
          <div className='cardBtn'>View Details</div>
        </div>
      </div>
    </div>
  )
}

export default Index
