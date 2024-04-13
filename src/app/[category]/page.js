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
  const {genre} = searchParams
  const {results} = await getData(type, genre)
  return (
    <>
      <div className='bg-black w-full h-full flex flex-col items-center justify-center text-white p-4'>
        <div className='text-center p-4 text-2xl font-bold'>{type.toUpperCase()} - {genre.toUpperCase()}</div>
        <div className="overflow-x-auto max-w-[100%] flex flex-1 items-center gap-5 p-4">
          <Options data={results} />
        </div>
      </div>
    </>
  )
}

export default page