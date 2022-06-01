import React from 'react'
// import Map from './map.webp'
import Social from '../../Components/Root/SocialMedia/Index'

const index = () => {
  return (
    <section className='aboutSection'>
      <div className='ar'>
        <div className='title'>About Us</div>
        <article>
          Shoe Carnival is one of the nation`s largest family footwear retailers
          with its own brand of style. Headquartered in Evansville, Indiana,
          Shoe Carnival stores are located in 35 states and Puerto Rico, as well
          as online at shoecarnival.com. We are continuing to grow! With our
          unique and distinctive concept and promotional marketing, Shoe
          Carnival steps ahead of our competitors by bringing the best deals on
          the hottest brands for the whole family! We have an incredibly
          talented, highly motivated, and diverse team in our Retail Stores,
          Corporate Office, and Distribution Center. We are looking for team
          members who understand the importance of customer service, have an
          excellent work ethic, and a passion for career growth opportunities.
          Put your best foot forward – join our Talent Network and apply today!
          Learn more about our careers and current opportunities on our Careers
          page. We trade on the NASDAQ exchange with the SCVL symbol. Investors
          and interested parties have access to other investor and interested
          party information, including press releases, annual reports, and Code
          of Ethics, on our investor public relations website.
        </article>
      </div>
      {/* <div className='ar'>
        <img src={Map} alt='store map' />
      </div>
      
      <div className='ar'></div> */}
      <div className='ar'>
        <Social />
      </div>
    </section>
  )
}

export default index
