import { SearchIcon } from './icon'

function index({ id = 'search' }) {
  return (
    <div className='searchBox'>
      <button className='searchBtn ' aria-label='Search'>
        <SearchIcon />
      </button>
      <input type='text' name='search' id={id} className='searchAria' />
      <label htmlFor={id} style={{ display: 'none' }}>
        For Search Input
      </label>
    </div>
  )
}

export default index
