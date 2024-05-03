import React, { useContext } from 'react'
import { GifContext } from "../context/GifsContext"



export const GifHero = () => {
    const { data } = useContext(GifContext)

    return (
        <div className='gap-10 grid mt-10 md:grid-cols-3 grid-cols-1'>
            {data && data.length > 0 &&
                data.map(gif => {
                    return <div className='flex justify-center' key={gif.id} ><img className='w-80 h-80' src={gif.images.original.url} alt={gif.title} />                        </div>

                })

            }

        </div>
    )
}
