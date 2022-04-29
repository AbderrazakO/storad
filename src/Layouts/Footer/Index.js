import Logo from '../../Components/Footer/Logo/Index'
import Media from '../../Components/Footer/SocialMedia/Index'
import Search from '../../Components/Footer/SearchBox/SearchBox'
import Payement from '../../Components/Footer/Payement/Index'

const Index = () => {
  return (
    <footer>
      <div className='footerRow'>
        <div className='footerCol'>
          <Logo />
          <div className='brandDescription'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            natus illum soluta iure, earum voluptate at molestias iusto. Nam,
            beatae?
          </div>
        </div>
        <div className='footerCol'>
          <h1 className='footerTitle'>Shop</h1>
          <a href='' className='footerLink'>
            Nuts
          </a>
          <a href='' className='footerLink'>
            Leaf
          </a>
          <a href='' className='footerLink'>
            Lorem0
          </a>
          <a href='' className='footerLink'>
            Lorem1
          </a>
          <a href='' className='footerLink'>
            Lorem3
          </a>
        </div>
        <div className='footerCol'>
          <h1 className='footerTitle'>Social</h1>
          <Media />
          <a href='' className='footerLink'>
            Facebook
          </a>
          <a href='' className='footerLink'>
            Whatsapp
          </a>
          <a href='' className='footerLink'>
            Instagram
          </a>
          <a href='' className='footerLink'>
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
