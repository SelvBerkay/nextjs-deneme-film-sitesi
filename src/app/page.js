"use client"
import DropdownMenu from '@/components/Navbar/DropdownMenu'
import React from 'react'
import { ReactTyped } from 'react-typed'
const page = () => {
  const linkClass = "px-4 py-2 rounded-md border border-slate-500 shadow hover:bg-blue-900 text-blue-400 transition-colors"
  return (
    <div className='bg-blue-900 w-full flex flex-col justify-center items-center gap-5' style={{ height: "calc(100vh - 67.97px)" }}>
      <div className='text-2xl font-bold text-blue-400'><ReactTyped strings={["Welcome To watchHere", "Please make your choice."]} typeSpeed={40} backSpeed={40} loop /></div>
      <div className='flex w-[90%] md:w-[50%] justify-between bg-blue-950 p-4 rounded'>
        <DropdownMenu categoryName={"Movies"} linkStyle={linkClass} />
        <DropdownMenu categoryName={"Series"} linkStyle={linkClass} />
      </div>
    </div>
  )
}

export default page