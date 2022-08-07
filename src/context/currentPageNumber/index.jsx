import {createContext, useState} from "react"

export const CurrentPageNumberContext = createContext()

export const CurrentPageNumberProvider = ({children})=>{
    const [currentPageNumber, setCurrentPageNumber] = useState(0)

    return(
        <CurrentPageNumberContext.Provider value={{currentPageNumber, setCurrentPageNumber}}>
            {children}
        </CurrentPageNumberContext.Provider>
    )
}

