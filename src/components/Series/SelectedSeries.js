import Image from 'next/image';
import React from 'react'
import { FaImdb } from "react-icons/fa";
const SelectedSeries = ({selectedSeries}) => {
  return (
    <div className='w-full h-full'>
    <div className='absolute top-44 left-14 w-1/2 rounded-lg p-3 z-20 bg-black bg-opacity-50 text-white flex flex-col gap-3'>
      <h1 className='text-3xl font-bold'>{selectedSeries.name} - {selectedSeries.first_air_date}</h1>
      <p className='flex items-center text-amber-600 gap-2'><FaImdb size={25} color='orange' /> {selectedSeries.vote_average.toFixed(2)} ({selectedSeries.vote_count})</p>
      <p className='text-md '>{selectedSeries.overview.slice(0, 200)}...</p>
    </div>
    <Image fill src={`https://image.tmdb.org/t/p/original${selectedSeries.backdrop_path}`} alt='' />
  </div>
  )
}

export default SelectedSeries