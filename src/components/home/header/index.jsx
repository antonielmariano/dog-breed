import { Content, StyledHeader } from "./styles"
import Logo from "../../../assets/images/logo.svg"
import toast from "react-hot-toast"
import { useContext } from "react"
import { LoggedUserContext } from "../../../context/loggedUser"

const Header = ()=> {

    const {setLoggedUser} = useContext(LoggedUserContext)

    const logout = ()=>{
        toast.success("Logout realizado com sucesso");
        localStorage.clear()
        setTimeout(()=>{
            setLoggedUser(false)
        }, 1400)
    }   

    return(
        <StyledHeader>
            <Content>
                <img src={Logo} alt="cachorro no meio da letra D"/>
                <button onClick={()=> logout()}>Sair</button>
            </Content>
        </StyledHeader>
    )
}

export default Header