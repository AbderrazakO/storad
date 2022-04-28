import { SearchIcon } from './icon'

function index() {
  return (
    <div className='searchBox'>
      <button className='searchBtn ' aria-label='Search'>
        <SearchIcon />
      </button>
      <input type='text' name='search' id='search' className='searchAria' />
    </div>
  )
}

export default index
