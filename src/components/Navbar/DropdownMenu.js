"use client"
import React, { useState } from 'react'
import Link from "next/link"
import { IoMdArrowDropdown } from "react-icons/io";
const DropdownMenu = ({ categoryName, linkStyle }) => {
  const movieGenres = [
    {
      name: "Popular",
      genre: "popular",
      url: "/movies?genre=popular"
    },
    {
      name: "Top Rated",
      genre: "top_rated",
      url: "/movies?genre=top_rated"
    },
    {
      name: "Coming soon",
      genre: "upcoming",
      url: "/movies?genre=upcoming"
    }
  ]
  const seriesGenres = [
    {
      name: "Popular",
      genre: "popular",
      url: "/series?genre=popular"
    },
    {
      name: "Top Rated",
      genre: "top_rated",
      url: "/series?genre=top_rated"
    },
    {
      name: "Airing Today",
      genre: "airing_today",
      url: "/series?genre=airing_today"
    }
  ]
  const hoverList = categoryName === "Movies" ? movieGenres : seriesGenres
  const [hidden, setHidden] = useState(true)
  return (
    <>
      <div className='relative'>
        <button
          className={`${linkStyle} flex items-center gap-2`}
          type="button"
          onClick={() => setHidden(!hidden)}
        >
          {categoryName} <IoMdArrowDropdown />
        </button>
        <div className={`absolute bottom--1 end-1 z-10 ${hidden && "hidden"} bg-blue-950 rounded-lg shadow`}>
          <ul className="py-2 text-responsive text-gray-700">
            {
              hoverList.map((item, i) =>
                <li key={i}>
                  <Link href={item.url} onClick={() => setHidden(!hidden)} className="block px-4 py-2 text-white hover:bg-gray-600 transition-colors">{item.name}</Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default DropdownMenu