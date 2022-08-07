import {createContext, useState} from "react"

export const LoadingPageContext = createContext()

export const LoadingPageProvider = ({children})=>{
    const [loading, setLoading] = useState(false)

    return(
        <LoadingPageContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingPageContext.Provider>
    )
}

