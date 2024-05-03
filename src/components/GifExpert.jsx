import React, { useContext } from 'react'
import { FormInput } from './FormInput'
import { CustomizedSwitches } from "./switch"
import { GifContext } from '../context/GifsContext'





export const GifExpert = () => {

    const { handleCheked, isChecked } = useContext(GifContext)


    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-8 '>
                <div className='flex'>
                    <h1 className={`${isChecked ? "text-black" : "text-black"} text-white text-4xl text-center mt-10`}>
                        GIF GALAXY
                    </h1>
                    <div onClick={handleCheked} className="absolute mr-[-40px]  mt-8 right-10" >
                        <CustomizedSwitches />
                    </div>
                </div>
                <FormInput />
            </div>
        </div >
    )
}
