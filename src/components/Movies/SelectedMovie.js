import React from 'react'

const SelectedMovie = ({item}) => {
  const {title, overview, release_date, tagline, vote_average, vote_count, runtime, genres, backdrop_path} = item
  return (
    <div>{title}</div>
  )
}

export default SelectedMovie