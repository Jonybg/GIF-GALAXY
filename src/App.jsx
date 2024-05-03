import React from 'react'
import { ContextGifs } from "./context/GifsContext"
import { Home } from './pages/Home';
import { Toaster } from 'react-hot-toast';





export const App = () => {



  return (
    <ContextGifs>
      <Toaster />
      <Home />
    </ContextGifs>

  )


}


