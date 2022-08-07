import {createContext, useState} from "react"

export const ListDogsContext = createContext()

export const ListDogsProvider = ({children})=>{
    const [listDogs, setListDogs] = useState([])

    return(
        <ListDogsContext.Provider value={{listDogs, setListDogs}}>
            {children}
        </ListDogsContext.Provider>
    )
}

