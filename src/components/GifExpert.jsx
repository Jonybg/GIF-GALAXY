import React, { useContext } from 'react'
import { FormInput } from './FormInput'
import { CustomizedSwitches } from "./switch"
import { GifContext } from '../context/GifsContext'





export const GifExpert = () => {

    const { handleCheked, isChecked } = useContext(GifContext)

    return (
        <div className='flex flex-col justify-center items-center gap-8'>
            <div className='flex justify-end  items-center w-full'>
                <h1 className={`${isChecked ? 'black' : 'black'} text-white text-4xl   m-auto mt-28`}>
                    GIF GALAXY
                </h1>
                <div className='mb-20  absolute ' onClick={handleCheked}>
                    <CustomizedSwitches />
                </div>
            </div>
            <FormInput />
        </div>
    )
}
