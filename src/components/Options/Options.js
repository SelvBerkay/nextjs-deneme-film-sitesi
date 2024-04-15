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
      <div className='flex justify-between items-center w-full'>
        <FaArrowAltCircleLeft size={30} className='cursor-pointer'  onClick={() => slide(-500)} />
        <FaArrowAltCircleRight size={30} className='cursor-pointer' onClick={() => slide(500)} />
      </div>
      <div ref={ref} id='slider' className="overflow-x-scroll max-w-[100%] flex flex-1 items-center gap-5 p-4 scroll-smooth scrollbar-none">
        {
          data?.map(item => <div key={item.id} className='relative min-w-[120px] min-h-[120px] cursor-pointer' onClick={() => handleClick(item.id)}>
            <Image sizes='100%' fill className='rounded' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt='image' />
          </div>)
        }
      </div>
    </>
  )
}

export default Options