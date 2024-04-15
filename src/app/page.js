"use client"
import React from 'react'
import { ReactTyped } from 'react-typed'
const page = () => {
  const linkClass = "px-4 py-2 rounded-md border border-slate-500 shadow hover:bg-blue-900 text-blue-400 transition-colors"
  return (
    <div className='bg-blue-900 w-full flex flex-col justify-center items-center gap-5' style={{ height: "calc(100vh - 67.97px)" }}>
      <div className='text-2xl font-bold text-blue-400'><ReactTyped strings={["Welcome To watchHere", "Please make your choice.", "Movies", "or", "Series"]} typeSpeed={60} backSpeed={5} loop /></div>
    </div>
  )
}

export default page