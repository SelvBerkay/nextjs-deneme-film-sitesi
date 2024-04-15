"use client"
import React, { useState } from 'react'
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const linkClass = "px-4 py-2 rounded-md border border-slate-500 shadow hover:bg-blue-900 transition-colors"
  return (
    <div className='w-screen flex justify-between items-center p-3 bg-blue-950'>
      <div className='text-xl font-bold bg-blue-400 rounded p-2'>watchHere<span className='text-sm'>.com</span></div>
      <div className='flex relative sm:hidden'>
        <GiHamburgerMenu size={30} color='white' onClick={() => setOpenMenu(!openMenu)} />
        <div className={`${openMenu ? "flex" : "hidden"} absolute top-10 end-4 flex-col gap-2 bg-blue-950 p-4 z-20`}>
          <Link href="/" className={linkClass} onClick={() => setOpenMenu(!openMenu)}>Home</Link>
          <Link href="/movies" className={linkClass} onClick={() => setOpenMenu(!openMenu)}>Movies</Link>
          <Link href="/series" className={linkClass} onClick={() => setOpenMenu(!openMenu)}>Series</Link>
        </div>
      </div>
      <div className='hidden sm:flex items-center px-5 gap-2 text-blue-400'>
        <Link href="/" className={linkClass}>Home</Link>
        <Link href="/movies" className={linkClass}>Movies</Link>
        <Link href="/series" className={linkClass}>Series</Link>
      </div>
    </div>
  )
}

export default Navbar