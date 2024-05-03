import React, { useContext } from 'react'
import { FormInput } from './FormInput'
import { CustomizedSwitches } from "./switch"
import { GifContext } from '../context/GifsContext'





export const GifExpert = () => {

    const { handleCheked, isChecked } = useContext(GifContext)

    return (
        <div className='flex flex-col justify-center items-center gap-8'>
            <div className='flex justify-between items-center w-full'>
                <h1 className={`text-${isChecked ? 'black' : 'black'} text-white text-4xl text-center m-auto mt-12`}>
                    GIF GALAXY
                </h1>
                <div className='mt-12' onClick={handleCheked}>
                    <CustomizedSwitches />
                </div>
            </div>
            <FormInput />
        </div>
    )
}
