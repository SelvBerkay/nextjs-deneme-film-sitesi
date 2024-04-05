"use client"
import React, { useEffect, useRef, useState } from 'react'
import SeriesCard from './SeriesCard'
import SelectedSeries from './SelectedSeries'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Series = ({ dt }) => {
  const [selectedSeries, setSelectedSeries] = useState(dt[0])
  useEffect(() => {
    setSelectedSeries(dt[0])
  }, [dt])

  const changeSelectedSeries = (id) => {
    dt.map(item => {
      if (item.id === id) {
        setSelectedSeries(item)
      }
    })

  }
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef();
  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition)
    containerRef.current.scrollLeft = newScrollPosition
  }
  const ITEM_WIDTH = 600
  return (
    <div className='w-screen h-screen relative overflow-hidden bg-no-repeat'>
      <SelectedSeries selectedSeries={selectedSeries} />
      <div className='absolute bottom-[18rem] left-14 flex gap-5'>
        <button className='rounded-full p-3 bg-black hover:bg-opacity-50 transition-opacity' onClick={() => { handleScroll(-ITEM_WIDTH) }}><FaArrowLeft size={25} color='white' /></button>
        <button className='rounded-full p-3 bg-black hover:bg-opacity-50 transition-opacity' onClick={() => { handleScroll(ITEM_WIDTH) }}><FaArrowRight size={25} color='white' /></button>
      </div>
      <div ref={containerRef} className='absolute bottom-3 left-14 h-1/3 scrollbar-none overflow-x-scroll w-[900px] scroll-smooth p-14  bg-black bg-opacity-50'>
        <div className='w-[6500px] h-full items-center justify-center flex gap-20'>
          {
            dt?.map((item) => <SeriesCard selectedSeries={selectedSeries} series={item} key={item.id} changeSelected={changeSelectedSeries} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Series