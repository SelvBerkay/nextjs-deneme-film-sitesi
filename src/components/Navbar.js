"use client"
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  console.log(pathName)
  const menuItems = [
    {
      name: "Popular",
      url: `${pathName}?genre=popular`
    },
    {
      name: "Top Rated",
      url: `${pathName}?genre=top_rated`
    },
    {
      name: pathName === "/series" ? "Airing Today" : "Coming soon",
      url: pathName === "/series" ? `${pathName}?genre=airing_today` : `${pathName}?genre=upcoming`
    }
  ]
  const [selectedMenu, setSelectedMenu] = useState(`${pathName}?genre=popular`)
  return (
    <div className='flex items-center justify-around p-1 z-10 absolute bg-black bg-opacity-60 top-0 w-screen'>
        <Link href="/" onClick={() => setSelectedMenu("")} className='flex justify-center items-center gap-2'><p className='text-3xl bg-yellow-500 rounded-md font-bold p-2'>Homepage</p></Link>
      <div className='flex items-center justify-between w-1/2 p-2 text-l text-white font-bold' >
        {
          menuItems.map((item, i) => {
            return <Link href={item.url} onClick={()=> setSelectedMenu(item.url)} className={`hover:underline transition-all cursor-pointer hover:text-yellow-500 ${selectedMenu === item.url && "underline text-yellow-500"}`} key={i}>{item.name}</Link>
          })
        }
      </div>
    </div>
  )
}

export default Navbar