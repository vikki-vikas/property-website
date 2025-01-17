import React from 'react'
import logo from './../../public/Orange-White-Logo.png'

const Header = () => {
  return (
    <header className='bg-blue px-6 p-4 sticky top-0 z-10' >
        <img src={logo} alt="" className='w-24' />
    </header>
  )
}

export default Header