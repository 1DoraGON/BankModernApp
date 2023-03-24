import React, { useState } from 'react'
import { close,logo,menu } from '../assets'
import { navLinks } from '../constants/constants'
const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justyfy-between
    items-center navbar">
      <img src={logo} alt="bank" className='w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <li className='text-white'>hello</li>
        <li className='text-white'>hello</li>
        <li className='text-white'>hello</li>
        <li className='text-white'>hello</li>
      </ul>
    </nav>
  )
}

export default Navbar