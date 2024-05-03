import React, { useContext } from 'react'
import { GifContext } from "../context/GifsContext"

export const FormInput = () => {

    const { onSubmitForm, onChangeInput, inputValue } = useContext(GifContext)



    return (
        <form className='md:flex-row flex-col forminput flex gap-4 ' onSubmit={onSubmitForm}>
            <input placeholder='enter a gif' className=' mx-auto home rounded-full border-4 border-black  w-[600px] pl-2' value={inputValue} onChange={onChangeInput} />
            <button className=' bg-green-500  md:py-2 md:px-8  mx-auto w-[100px] py-1 px-3 rounded-full'>Search</button>
        </form>
    )
}
