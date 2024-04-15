import SelectedMovie from '@/components/Movies/SelectedMovie'
import SelectedSeries from '@/components/Series/SelectedSeries'
import React from 'react'
const getDetail = async (id, type) => {
  const APIKEY = process.env.MOVIE_API
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${APIKEY}`)
  const data = res.json()
  return data
}

const page = async ({ params }) => {
  const type = params.category === "movies" ? "movie" : "tv"
  const data = await getDetail(params.id, type)
  return (
    <div className='w-full h-full bg-blue-900 text-white flex items-center justify-center p-4'>
      {
        type === "movie" ? <SelectedMovie item={data}/> : <SelectedSeries item={data}/>
      }
    </div>
  )
}

export default page