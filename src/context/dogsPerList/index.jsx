import {createContext, useState} from "react"

export const DogsPerListContext = createContext()

export const DogsPerListProvider = ({children})=>{
    const [dogsPerList, setDogsPerList] = useState([])

    return(
        <DogsPerListContext.Provider value={{dogsPerList, setDogsPerList}}>
            {children}
        </DogsPerListContext.Provider>
    )
}

