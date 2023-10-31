import React from 'react'
import './header.css'
import Buttons from './Buttons'
import Pfp1 from '../../assets/Linked-in.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, my name is</h5>
        <h1>David Wan</h1>
        <h5 className='text-light'>Rochester Institute of Technology</h5>
        <h5 className='text-light'>Computer Engineering Technology</h5>
        <Buttons />
        <Socials />

        <div className='flex-container'>
          <img className="PFP"src={Pfp1} alt="PFP1" />
        </div>

      

      </div>
    </header>
  )
}

export default Header