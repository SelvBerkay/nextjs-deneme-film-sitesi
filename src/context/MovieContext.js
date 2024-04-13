"use client"
import React, { createContext, useState } from 'react';

const MovieContext = createContext();

const MovieContextProvider = ({children}) => {
  const [id, setId] = useState("157336")
  const getDetail = async (id) => {
    const APIKEY = process.env.MOVIE_API
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`)
    const data = res.json()
    return data
  }

  return (
    <MovieContext.Provider value={{id, getDetail}}>
      {children}
    </MovieContext.Provider>
  )
}

export {MovieContext,MovieContextProvider}