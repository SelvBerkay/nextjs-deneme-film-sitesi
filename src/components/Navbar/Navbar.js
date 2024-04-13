"use client"
import React from 'react'
import Link from "next/link"
import DropdownMenu from './DropdownMenu'
const Navbar = () => {

  const linkClass = "px-4 py-2 rounded-md border border-slate-500 shadow hover:bg-blue-900"
  return (
    <div className='w-screen flex justify-between items-center p-3 bg-blue-950'>
      <div className='text-xl font-bold bg-blue-400 rounded p-2'>watchHere<span className='text-sm'>.com</span></div>
      <div className='flex gap-1 md:gap-5 justify-between px-5 text-blue-400'>
        <Link href="/" className={linkClass}>Home</Link>
        <DropdownMenu categoryName={"Movies"} linkStyle={linkClass}/>
        <DropdownMenu categoryName={"Series"} linkStyle={linkClass}/>
      </div>
    </div>
  )
}

export default Navbar