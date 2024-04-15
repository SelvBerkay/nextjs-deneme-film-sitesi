import React from 'react'
import Image from "next/image"
import { FaImdb } from "react-icons/fa";
const SelectedSeries = ({ item }) => {
  const { backdrop_path, genres, name, number_of_episodes, number_of_seasons, overview, vote_average, vote_count, tagline } = item
  return (
    <div className='w-[80%] rounded bg-blue-950 flex justify-between p-4 items-center'>
      <div className='w-[50%] flex flex-col gap-2'>
        <div className='flex gap-2 text-purple-800'>
          {
            genres.map(genre => <p>{genre.name}</p>)
          }
        </div>
        <div className='text-2xl font-bold flex items-center gap-3'>{name} <FaImdb size={24} color='orange' /> <span className='text-amber-500'>{vote_average.toFixed(1)} ({vote_count})</span> </div>
        <div className='text-md text-slate-500'>{tagline}</div>
        <div className='text-md text-slate-500'>{number_of_episodes} Episodes - {number_of_seasons} Seasons</div>
        <div className='text-l text-blue-400'>{overview}</div>
        <div className='flex gap-4 my-2'>
          <button className='outline outline-blue-900 bg-blue-900 rounded text-xl py-2 px-4 hover:bg-transparent hover:outline-blue-900'>Watch Trailer</button>
          <button className='outline outline-blue-900 rounded text-slate-500 py-2 px-4 hover:bg-blue-900'>Get Tickets</button>
        </div>
      </div>
      <div className='w-[450px] h-[340px] border-4 rounded border-gray-900 p-4 relative'>
        <Image fill src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
      </div>
    </div>
  )
}

export default SelectedSeries