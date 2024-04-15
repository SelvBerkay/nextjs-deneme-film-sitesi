import Options from '@/components/Options/Options'
import React from 'react'


const getPopularData = async (type) => {
  const APIKEY = process.env.MOVIE_API
  const res = await fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=${APIKEY}`)

  const data = res.json()

  return data
}

const getTopRatedData = async (type) => {
  const APIKEY = process.env.MOVIE_API
  const res = await fetch(`https://api.themoviedb.org/3/${type}/top_rated?api_key=${APIKEY}`)

  const data = res.json()

  return data
}

const getUpcomingData = async (type) => {
  const genre = type === "movie" ? "upcoming" : "airing_today"
  const APIKEY = process.env.MOVIE_API
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${genre}?api_key=${APIKEY}`)

  const data = res.json()

  return data
}

const page = async ({ params }) => {
  const type = params.category === "movies" ? "movie" : "tv"
  const popularData = await getPopularData(type)
  const topRatedData = await getTopRatedData(type)
  const coming = await getUpcomingData(type)
  return (
    <>
      <div className='bg-blue-900 w-full flex flex-col items-center justify-center text-blue-400 p-4' style={{ height: "calc(100vh - 67.97px)" }}>
        <div className='text-center p-4 text-2xl font-bold'>{type.toUpperCase()} - Popular</div>
        <Options data={popularData.results} />
        <div className='text-center p-4 text-2xl font-bold'>{type.toUpperCase()} - Top Rated</div>
        <Options data={topRatedData.results} />
        <div className='text-center p-4 text-2xl font-bold'>{type.toUpperCase()} - {type === "movie" ? "Coming Soon" : "Airing Today"}</div>
        <Options data={coming.results} />    
      </div>
    </>
  )
}

export default page