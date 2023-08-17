import React,{useState} from 'react'
import SignInSide from './Signin'
// imported icons 
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/Cg'

// imported images
import logo from '../../assets/logo.ico'

const Navbar = () => {

//let us remove the navbar in small width screen
const[active,setActive] = useState('navBarMenu')
const [isSignInActive,setSignInActive]=useState(false)

const showNavBar = ()=> {
  setActive('navBarMenu showNavBar')
}

const removeNavBar = ()=> {
  setActive('navBarMenu')
}

//let us add a background color to the seconds navbar
const[noBg,addBg] = useState('navBarTwo')

const addBgColor = ()=> {
 if(window.scrollY >= 10){
  addBg('navBarTwo navbar_with_bg')
 } else {
  addBg('navBarTwo')
 }
}

window.addEventListener('scroll',addBgColor)




  return (
    <div className='navBar flex'> 
    {isSignInActive && <SignInSide/>}
    <div className="navBarOne flex">
      <div>
      <SiConsul   className='icon'/>
      </div>
      <div className=' none flex'>
        <li className='flex'><BsPhoneVibrate className='icon'/> Support</li>
        <li className='flex'> <AiOutlineGlobal className='icon'/>Languages</li>
      </div>

      <div className="atb flex">
         <span className='abc' onClick={()=>{setSignInActive(prev=>!prev)}}> Sign In </span>  {/*className abc by me */}
        <span className='abc'> Sign Out </span>
      </div>

     </div> 

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo}  className='Logo'/>
        </div> 
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem"><a href="#homeid">Home</a></li>
            <li onClick={removeNavBar} className="listItem">About</li>
            <li onClick={removeNavBar} className="listItem">Offers</li>
            <li onClick={removeNavBar} className="listItem">Seats</li>
            <li onClick={removeNavBar} className="listItem">Destionations</li>
          </ul>
          <button onClick={removeNavBar} className='btn flex btnOne'>
            Contact
          </button>
        </div>

        <button className='btn flex btnTwo'>
            Contact
          </button>

          <div onClick={showNavBar } className='toggleIcon'>
          <CgMenuGridO className='icon'/>
          </div>

      </div>
    </div>
  )
}

export default Navbar