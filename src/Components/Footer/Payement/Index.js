import {
  MaestroIcon,
  MastercardIcon,
  PaypalIcon,
  VisaIcon,
  GooglePayIcon,
} from './icons'

const Index = () => {
  return (
    <div className='payementSection'>
      <div className='payementMethod'>
        <MaestroIcon />
      </div>
      <div className='payementMethod'>
        <MastercardIcon />
      </div>
      <div className='payementMethod'>
        <VisaIcon />
      </div>
      <div className='payementMethod'>
        <PaypalIcon />
      </div>
      <div className='payementMethod'>
        <GooglePayIcon />
      </div>
    </div>
  )
}

export default Index
