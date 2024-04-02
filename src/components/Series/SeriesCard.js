import Image from 'next/image'
import React from 'react'

const SeriesCard = ({selectedSeries, series, changeSelected}) => {
  return (
    <div onClick={() => changeSelected(series.id)} className={`relative hover:-mt-5 transition-all cursor-pointer  ${selectedSeries.id === series.id ? "-mt-5"  : "" }`}>
    <p className="w-full absolute flex items-end h-full p-2 opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-25 text-white font-bold">{series.name}</p>
    <Image width={250} height={200} className='rounded-xl max-w-[250px]' src={`https://image.tmdb.org/t/p/original${series.backdrop_path}`} alt='' />
  </div>
  )
}

export default SeriesCard