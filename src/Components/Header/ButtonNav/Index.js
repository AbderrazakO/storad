import Search from '../../Root/SearchBox/SearchBox'
import Store from '../../Root/StoreBtn/Index'
import DarkModeBtn from '../../Root/DarkModeBtn/Index'

const ButtonNav = () => {
  //
  return (
    <div className='headerButtonContainer'>
      <Search id={'HeaderSearch'} />
      <Store />
      <DarkModeBtn />
    </div>
  )
}

export default ButtonNav
