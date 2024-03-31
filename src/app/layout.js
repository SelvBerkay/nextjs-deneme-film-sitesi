import React from 'react'
import Navbar from '../../components/Navbar'
import "./global.css"
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: "300" })

const Layout = ({ children }) => {
  return (
    <html>
      <head>
        <title>Next Movie</title>
        <link rel="icon" href="/public/favicon.ico"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default Layout