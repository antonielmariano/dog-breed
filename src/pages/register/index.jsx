import toast, { Toaster } from "react-hot-toast"
import { Container } from "./styles"
import bgRegister from "../../assets/images/bg-register.gif"
import FormRegister from "../../components/register/FormRegister"
import { motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LoggedUserContext } from "../../context/loggedUser"

const Register = ()=> {

    const history = useHistory()

    const {loggedUser} = useContext(LoggedUserContext)

    useEffect(()=>{
        toast.remove()
        loggedUser && history.push("/home")
    }, [loggedUser])

    return(
        <>
            <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{duration: 1000}}
            />
            <Container>
                <motion.div
                    className="div-img"
                    initial={{ x: "-50%" , opacity: 0}}
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                    }}
                    >

                <img src={bgRegister} alt="gif cachorro abanando rabo"/>
                </motion.div>
                <motion.div
                    className="div-form"
                    initial={{ y: "-50%" , opacity: 0}}
                    animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                    }}
                    >

                        <FormRegister/>
                    </motion.div>
            </Container>
        </>
    )
}


export default Register