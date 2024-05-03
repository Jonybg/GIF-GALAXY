import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";
export const GifContext = createContext()

export const ContextGifs = ({ children }) => {


    const [data, setdata] = useState([])
    const [inputValue, setinputValue] = useState("")
    const [isChecked, setisChecked] = useState(true)


    const handleCheked = () => {
        setisChecked(!isChecked)
        document.body.style.backgroundColor = isChecked ? 'white' : 'black';
        const h1Element = document.querySelector('h1');
        if (h1Element) {
            h1Element.style.color = isChecked ? 'black' : 'white';
        }
    }





    const fetchData = async () => {

        try {
            const { data } = await axios.get(`https://api.giphy.com/v1/stickers/search?api_key=StlwbbPLn6r0GrnO9C2vbqGNcRV4XL45&q=${inputValue}`)
            setdata(data.data)

            if (data.data.length === 0) {
                toast.error("no gifs found")
            }

            toast.success(`were found ${data.data.length} gifs`)



        } catch (error) {

            console.log(error, "Error")


        }


    }





    const onChangeInput = (e) => {
        setinputValue(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()

        if (inputValue.trim() === "") {
            toast.error("please enter something")
            return
        }
        fetchData()
        setinputValue("")
    }






    return (
        <GifContext.Provider value={{ data, setdata, onChangeInput, onSubmitForm, inputValue, handleCheked, isChecked }} >
            {children}
        </GifContext.Provider>
    )


}

