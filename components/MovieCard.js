"use client"
import Image from 'next/image'
import React from 'react'

const MovieCard = ({selectedMovie,movie, changeSelected}) => {


  return (
    <div onClick={() => changeSelected(movie.id)} className={`relative hover:-mt-5 transition-all cursor-pointer  ${selectedMovie.id === movie.id ? "-mt-5"  : "" }`}>
      <p className="w-full absolute flex items-end h-full p-2 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-25 text-white font-bold">{movie.title}</p>
      <Image width={250} height={200} className='rounded-xl max-w-[250px]' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='' />
    </div>
  )
}

export default MovieCard