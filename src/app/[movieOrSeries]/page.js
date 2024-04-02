import Movies from '@/components/Movies/Movies'
import Series from '@/components/Series/Series'
import React from 'react'

const getData = async (type, genre) => {
  const APIKEY = process.env.MOVIE_API
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${genre}?api_key=${APIKEY}`)

  const data = res.json()

  return data
}



const page = async ({ params, searchParams }) => {
  const type = params.movieOrSeries === "movies" ? "movie" : "tv"
  const genre = searchParams.genre
  const data = await getData(type, genre)
  return (
    <>
      {
        type === "movie" ? <Movies dt={data.results} /> : <Series dt={data.results} />
      }
    </>
  )
}

export default page