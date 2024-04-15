"use client"
import { useParams, useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import Image from "next/image"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
const Options = ({ data }) => {
  const router = useRouter();
  const { category } = useParams();
  const handleClick = (id) => {
    router.push(`/${category}/${id}`)
  }
  const ref = useRef();
  const slide = (offset) => {
    console.log(ref)
    ref.current.scrollLeft += offset
  }
  return (
    <>

      <div ref={ref} id='slider' className="overflow-x-scroll max-w-[100%] flex flex-1 items-center gap-5 p-4 scroll-smooth scrollbar-none">
          <FaArrowAltCircleLeft size={40} color='white' className='cursor-pointer absolute start-0 z-10' onClick={() => slide(-500)} /> 
        {
          data?.map(item =>
            <div key={item.id}
              className='relative min-w-[220px] min-h-[140px] cursor-pointer'
              onClick={() => handleClick(item.id)}>
              <div className='opacity-0 bg-black bg-opacity-0 w-full h-full absolute text-left z-10 p-4 text-blue-450 font-bold hover:opacity-100 hover:bg-opacity-75'>{item.title ? item.title : item.name}</div>
              <Image sizes='100%' fill className='rounded-lg' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt='image' />
            </div>)
        }
        <FaArrowAltCircleRight size={40} color='white' className='cursor-pointer absolute end-0 z-10' onClick={() => slide(500)} />
      </div>
    </>
  )
}

export default Options