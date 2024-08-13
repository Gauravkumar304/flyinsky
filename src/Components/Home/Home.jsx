import React, {useEffect} from 'react'
import ReactPlayer  from 'react-player'

// import Assest
import video from '../../assets/video1.mp4'
import aeroplane from '../../assets/takeoff.png'

//import AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home =() =>{
  //useEffect to set animation duration
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, [] )

  return (
      <div className="home flex container" id="homeid">

        <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500' > Create ever-lasting memories with us</h1>
      </div>

      <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop   className='video'></video>
           </div>

        {/*  "src\assets\video.mp4"  {video} autoplay muted loop*/}
        
        <img src={aeroplane} className='plane'  />

      </div>

    </div>
  )
}

export default Home