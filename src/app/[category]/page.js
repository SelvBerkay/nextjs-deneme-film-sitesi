import Options from '@/components/Options/Options'
import React from 'react'


const getData = async (type, genre) => {
  const APIKEY = process.env.MOVIE_API
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${genre}?api_key=${APIKEY}`)

  const data = res.json()

  return data
}

const page = async ({ params, searchParams }) => {
  const type = params.category === "movies" ? "movie" : "tv"
  const { genre } = searchParams
  const { results } = await getData(type, genre)
  return (
    <>
      <div className='bg-blue-900 w-full flex flex-col items-center justify-center text-blue-400 p-4' style={{ height: "calc(100vh - 67.97px)" }}>
        <div className='text-center p-4 text-2xl font-bold'>{type.toUpperCase()} - {genre.toUpperCase()}</div>
        <Options data={results} />
      </div>
    </>
  )
}

export default page