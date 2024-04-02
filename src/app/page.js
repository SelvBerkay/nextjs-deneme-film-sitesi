import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col bg-black bg-opacity-50 w-screen h-screen justify-center items-center gap-5">
      <h1 className='text-3xl font-bold text-white'>Which type would you like to watch? Select one.</h1>
      <div className='flex items-center justify-around w-full'>
        <Link href={"/movies?genre=popular"} className='p-36 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-opacity text-white font-bold text-3xl cursor-pointer'>Movies</Link>
        <Link href={"/series?genre=popular"} className='p-36 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-100 transition-opacity text-white font-bold text-3xl cursor-pointer'>Series</Link>
      </div>
    </div>
  )
}

export default page