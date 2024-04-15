"use client"
import React from 'react'
import Image from "next/image"
import { FaImdb, FaClock  } from "react-icons/fa";
import { IoCaretBackCircle } from "react-icons/io5";
import { useRouter } from 'next/navigation';
const SelectedMovie = ({ item }) => {
  const router = useRouter();
  const { title, overview, tagline, vote_average, vote_count, runtime, genres, backdrop_path } = item
  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}H ${minutes}M`;
  }
  return (
    <div className='w-[100%] relative rounded-md h-full bg-blue-950 flex flex-col lg:flex-row  p-4 items-center'>
      <div onClick={() => router.push("/movies")} className='cursor-pointer absolute top-2 start-2 z-20'><IoCaretBackCircle color='white' size={40} /></div>
      <Image fill className='opacity-75 rounded-md' src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}/>
      <div className='w-[80%] lg:w-[60%] h-full flex flex-col gap-2 z-10 bg-black bg-opacity-75 p-4'>
        <div className='flex gap-2 text-purple-800'>
          {
            genres.map((genre, i) => <p key={i} className='text-sm font-bold'>{genre.name}</p>)
          }
        </div>
        <div className='text-2xl font-bold'>{title}</div>
        <div className='text-sm text-slate-500 flex items-center gap-2'>{toHoursAndMinutes(runtime)} <FaClock size={12} /> <FaImdb size={24} color='orange' /> <span className='text-amber-500'>{vote_average.toFixed(1)} ({vote_count})</span> </div>
        <div className='text-md text-slate-500'>{tagline}</div>
        <div className='text-l text-blue-400'>{overview}</div>
        <div className='flex gap-4'>
          <button className='outline outline-blue-900 bg-blue-900 rounded text-xl py-2 px-4 hover:bg-transparent hover:outline-blue-900'>Watch Trailer</button>
          <button className='outline outline-blue-900 rounded text-slate-500 py-2 px-4 hover:bg-blue-900'>Get Tickets</button>
        </div>
      </div>
    </div>
  )
}

export default SelectedMovie