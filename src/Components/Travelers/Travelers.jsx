import React, {useEffect} from 'react'

//import  destination images
import paris from '../../assets/paris1.jpg'
import newyork from '../../assets/new york1.jpg'
import london from '../../assets/london1.jpg'
import dubai from '../../assets/dubai.jpg'
//import  traveler images
import traveler1 from '../../assets/pallavi1.jpg'
import traveler2 from '../../assets/pushkar.jpg'
import traveler3 from '../../assets/bhaskar.jpeg'
import traveler4 from '../../assets/logo.ico'

//import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

// wea re going to use high order array method called Map to 
//dispaly all the data
const travelers = [
  {
     id:1,
     destinationImage:paris,
     travelerImage:traveler1,
     travelername:'PALLAVI SINGH',
     socialLink:'@SISTER'
  },

  {
    id:2,
    destinationImage:london,
    travelerImage:traveler2,
    travelername:'PUSHKAR SINGH',
    socialLink:'@BROTHER'
 },

  {
    id:3,
    destinationImage:newyork,
    travelerImage:traveler3,
    travelername:'BHASKAR SINGH',
    socialLink:'@BROTHER'
  },

  {
    id:4,
    destinationImage:dubai,
    travelerImage:traveler4,
    travelername:'LOGO',
    socialLink:'@logo'
  },
]
const Travelers = () => {
  //useEffect to set animation duration
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [] )


  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this months!
          </h2>

        <div className="travelersContainer grid">
                   
          {
            travelers.map(({id, destinationImage, travelerImage, travelername, socialLink}) =>{
              return(
                //{/* single passanger card */}
              <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
               <img src={destinationImage} className='destinationImage' />

                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className='travelerImage' />
                  </div>
                  <div className="travelername">
                    <span >{travelername}</span>  {/* classname  */}
                    <p >{socialLink}</p>          {/* classname  */}
                  </div>
                </div>
              </div>
              )
            })
          }

        </div>  
      </div>

    </div>
  )
}

export default Travelers