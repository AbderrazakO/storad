import Search from './SearchBox/SearchBox'
import Store from '../StoreBtn/Index'
import DarkModeBtn from './DarkModeBtn/Index'

const ButtonNav = () => {
  //
  return (
    <div className='headerButtonContainer'>
      <Search />
      <Store />
      <DarkModeBtn />
    </div>
  )
}

export default ButtonNav
