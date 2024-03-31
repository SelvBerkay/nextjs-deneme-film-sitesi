import React from 'react'
import Movies from '../../../components/Movies'


const getData = async (params) => {
  const APIKEY = process.env.MOVIE_API
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params}?api_key=${APIKEY}`)

  const data = res.json()

  return data
}




const page = async ({params}) => {
  const data = await getData(params.movieList)
  return (
      <Movies dt={data.results} />
  )
}

export default page