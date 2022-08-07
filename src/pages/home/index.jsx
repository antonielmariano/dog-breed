import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Container } from "./styles"
import { motion } from "framer-motion"
import Header from "../../components/home/header"
import toast, { Toaster } from "react-hot-toast"
import { LoggedUserContext } from "../../context/loggedUser"
import { ListDogsContext } from "../../context/listDogs"
import FilterBreed from "../../components/home/filterBreed"
import DogList from "../../components/home/dogList"
import api from "../../services/API"
import { LoadingPageContext } from "../../context/loadingPage"

const styleMotion ={
    backgroundColor: "var(--background-blue)",
    position: "fixed",
    zIndex: 1,
    top: "80px",
    width: "100vw", 
    height: "80px",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
}

const Home = ()=> {

    const token = localStorage.getItem("tokenDB")

    const history =  useHistory()

    const {loggedUser} = useContext(LoggedUserContext)
    const {setListDogs} = useContext(ListDogsContext)
    const {setLoading} = useContext(LoadingPageContext)

    useEffect(()=>{

        toast.remove()
        !loggedUser && history.push("/")
        setLoading(true)
        api.get("/list",  {headers: {
            Authorization: `${token}`,
        }})
        .then(res => setListDogs(res.data))
        .finally((res)=>setLoading(false))

    }, [loggedUser])


    return(
        <>
        <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{duration: 1000}}
            />
        <motion.div
        style={{width: "100vw", height: "100vh"}}
        initial={{ opacity: 0 }}
        animate={{
            scale: 1,
            opacity: 1,
        }}
        >
            <Header/>
            <motion.div
                style={styleMotion}
                initial={{ opacity: 0, y: "-100%" }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    y: 0
                }}
                >
                    <FilterBreed/>       
                </motion.div>
            <Container>
                <DogList/>  
            </Container>
            
        </motion.div>
        </>
    )
}


export default Home