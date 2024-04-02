import React from 'react'
import Navbar from '@/components/Navbar'
import "../global.css"
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: "300" })

const OptionsLayout = ({ children }) => {
  return (
      <main className={poppins.className}>
        <Navbar />
        {children}
      </main>
  )
}

export default OptionsLayout