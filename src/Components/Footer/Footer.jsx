import React, {useEffect} from 'react'

import Logo from '../../assets/logo.jpg'

// import icons
import {TiSocialFacebook} from 'react-icons/ti'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'

//import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  //useEffect to set animation duration
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [] ) 

  return (
    <div className='footer'>
      
      <div className="sectionContainer container grid">
        <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
          <div className="logoDiv">
            <img src={Logo} className='Logo' />
          </div>
          <p>Your mind should be stringer than your feelings</p>
          <div className="socialIcon flex">
          <TiSocialFacebook className='icon' />
          <AiOutlineTwitter className='icon' />
          <AiFillYoutube className='icon' />
          <FaPinterestP className='icon' />
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="" className='q'>Home</a>
          </li>
          <li>
            <a href="" className='q'>Explore</a>
          </li>
          <li>
            <a href="" className='q'>Flight Status</a>
          </li>
          <li>
            <a href="" className='q'> Travel</a>
          </li>
          <li>
            <a href="" className='q'>Check-In</a>
          </li>
          <li>
            <a href="" className='q'>Maage your booking</a>
          </li>
        </div>
        
        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="" className='q'>FAQ</a>
          </li>
          <li>
            <a href="" className='q'>How to</a>
          </li>
          <li>
            <a href="" className='q'>Features</a>
          </li>
          <li>
            <a href="" className='q'> Baggage</a>
          </li>
          <li>
            <a href="" className='q'>Route Map</a>
          </li>
          <li>
            <a href="" className='q'>Our Communities</a>
          </li>
        </div>
        
        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="" className='q'>Chauffuer</a>
          </li>
          <li>
            <a href="" className='q'>Our partners</a>
          </li>
          <li>
            <a href="" className='q'>Destination</a>
          </li>
          <li>
            <a href="" className='q'>Transporation</a>
          </li>
          <li>
            <a href="" className='q'>Program Rules</a>
          </li>
        </div>
        
      </div>

      <div className="copyRightDiv flex">
        <p>Courtesy Design |  Developed by <a href="pushkarkumarsingh7499@gmail.com"
         target='_blank'>Gaurav</a></p>
      </div>

    </div>
  )
}

export default Footer