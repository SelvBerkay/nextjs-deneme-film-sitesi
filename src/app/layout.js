import React from 'react'
import "./global.css"
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
const poppins = Poppins({ subsets: ['latin'], weight: "300" })

const Layout = ({ children }) => {
  return (
    <html>
      <head>
        <title>Next Movie</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className={`${poppins.className}`}>
        <div className='w-screen h-screen overflow-hidden'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}

export default Layout