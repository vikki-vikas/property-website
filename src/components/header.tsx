import React from 'react'
import logo from './../../public/logo.webp'

const Header = () => {
  return (
    <header className='bg-slate-200 lg:bg-blue px-6 p-4 sticky top-0 z-10' >
        <img src={logo} alt="" className='w-32' />
    </header>
  )
}

export default Header