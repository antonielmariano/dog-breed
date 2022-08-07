import {createContext, useState} from "react"

export const LoggedUserContext = createContext()

export const LoggedUserProvider = ({children})=>{
    const [loggedUser, setLoggedUser] = useState(localStorage.getItem("tokenDB") ? true : false)

    return(
        <LoggedUserContext.Provider value={{loggedUser, setLoggedUser}}>
            {children}
        </LoggedUserContext.Provider>
    )
}

