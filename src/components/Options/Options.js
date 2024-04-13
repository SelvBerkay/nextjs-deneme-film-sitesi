"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import Image from "next/image"
const Options = ({ data }) => {
  const router = useRouter();
  const { category } = useParams();
  const handleClick = (id) => {
    router.push(`/${category}/${id}`)
  }
  return (
    <>
      {
        data?.map(item => <div key={item.id} className='relative min-w-[120px] min-h-[120px] cursor-pointer' onClick={() => handleClick(item.id)}>
          <Image fill className='rounded' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
        </div>)
      }
    </>
  )
}

export default Options