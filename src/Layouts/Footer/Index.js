import Logo from '../../Components/Root/Logo/Index'
import Media from '../../Components/Root/SocialMedia/Index'
import Search from '../../Components/Root/SearchBox/SearchBox'
import Payement from '../../Components/Footer/Payement/Index'

const Index = () => {
  return (
    <footer>
      <div className='footerRow'>
        <div className='footerCol'>
          <Logo />
          <div className='brandDescription'>
            {`The Shoe Company is a Moroccan shoe store, originating in Greater Rabat Area in 1992. From its inception, The Shoe Company was operated by conglomerate Town Shoes. The founder of Town Shoes, Leonard Simpson, had predicted a growth opportunity for footwear to be sold in a big box format.`}
          </div>
        </div>
        <div className='footerCol'>
          <h1 className='footerTitle'>Shop</h1>
          <a href='/shop/sneakers' className='footerLink'>
            Sneakers
          </a>
          <a href='/shop/sandals' className='footerLink'>
            Sandals
          </a>
          <a href='/shop/loafers' className='footerLink'>
            Loafers
          </a>
          <a href='/shop/boots' className='footerLink'>
            Boots
          </a>
          <a href='/shop/heels' className='footerLink'>
            Heels
          </a>
        </div>
        <div className='footerCol'>
          <h1 className='footerTitle'>Social</h1>
          <Media />
          <a href='/' className='footerLink'>
            Facebook
          </a>
          <a href='/' className='footerLink'>
            Whatsapp
          </a>
          <a href='/' className='footerLink'>
            Instagram
          </a>
          <a href='/' className='footerLink'>
            Discord
          </a>
        </div>
        <div className='footerCol'>
          <Search />
          <div className='footerTitle'>Payement</div>
          <Payement />
        </div>
      </div>
      <div className='footerRow'>
        <div>©2022, Abderrazaq Oussi, All rights reserved</div>
      </div>
    </footer>
  )
}

export default Index
