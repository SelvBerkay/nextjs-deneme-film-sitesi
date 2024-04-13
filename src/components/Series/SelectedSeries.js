import React from 'react'

const SelectedSeries = ({item}) => {
  const {backdrop_path,genres,name,number_of_episodes,number_of_seasons,overview,vote_average,vote_count,tagline} = item
  return (
    <div>{name}</div>
  )
}

export default SelectedSeries