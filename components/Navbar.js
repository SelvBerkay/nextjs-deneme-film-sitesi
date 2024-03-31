"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

  const menuItems = [
    {
      name: "Popular",
      url: "/popular"
    },
    {
      name: "Top Rated",
      url: "/top_rated"
    },
    {
      name: "Coming soon",
      url: "/upcoming"
    }
  ]
  const [selectedMenu, setSelectedMenu] = useState("")
  return (
    <div className='flex items-center justify-around p-1 z-10 absolute bg-black bg-opacity-60 top-0 w-screen'>
        <Link href="/" onClick={() => setSelectedMenu("")} className='flex justify-center items-center gap-2'><p className='text-3xl bg-yellow-500 rounded-md font-bold p-2'>New</p> <span className='text-3xl font-bold text-yellow-500'>Movie</span></Link>
      <div className='flex items-center justify-between w-1/2 p-2 text-l text-white font-bold' >
        {
          menuItems.map((item, i) => {
            return <Link href={item.url} onClick={()=> setSelectedMenu(item.name)} className={`hover:underline transition-all cursor-pointer hover:text-yellow-500 ${selectedMenu === item.name && "underline text-yellow-500"}`} key={i}>{item.name}</Link>
          })
        }
      </div>
    </div>
  )
}

export default Navbar