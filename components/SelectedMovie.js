import React from 'react'
import Image from 'next/image'
import { FaImdb } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";



const SelectedMovie = ({ selectedMovie }) => {


  return (
    <div className='w-full h-full'>
      <div className='absolute top-44 left-14 w-1/2 rounded-lg p-3 z-20 bg-black bg-opacity-50 text-white flex flex-col gap-3'>
        <h1 className='text-3xl font-bold'>{selectedMovie.title} - {selectedMovie.release_date}</h1>
        <p className='flex items-center text-amber-600 gap-2'><FaImdb size={25} color='orange' /> {selectedMovie.vote_average.toFixed(2)} ({selectedMovie.vote_count})</p>
        <p className='text-md '>{selectedMovie.overview.slice(0, 200)}...</p>
        {selectedMovie.genres?.map(genre => <h3 key={genre.id}>{genre.name}</h3>)}
      </div>
      <Image fill src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`} alt='' />
    </div>
  )
}

export default SelectedMovie