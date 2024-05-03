import React, { useContext } from 'react'
import { GifExpert } from '../components/GifExpert'
import { GifHero } from '../components/GifHero'
import { GifContext } from '../context/GifsContext'




export const Home = () => {

    const { isChecked } = useContext(GifContext)


    return (
        <div className=''>
            <GifExpert />
            <GifHero />
        </div>
    )
}
