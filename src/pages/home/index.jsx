import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Container } from "./styles"
import { AnimatePresence, motion } from "framer-motion"
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


const styledMotionImg = {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1001,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.55)",
    cursor: "pointer"
}


const Home = ()=> {

    const token = localStorage.getItem("tokenDB")

    const history =  useHistory()
    const [selectedId, setSelectedId] = useState(null)

    const {loggedUser} = useContext(LoggedUserContext)
    const {setListDogs} = useContext(ListDogsContext)
    const {loading, setLoading} = useContext(LoadingPageContext)

    useEffect(()=>{

        !loggedUser && history.push("/")

    }, [loggedUser])

    useEffect(()=>{

        toast.remove()
        setLoading(true)
        api.get("/list",  {headers: {
            Authorization: `${token}`,
        }})
        .then(res => setListDogs(res.data))
        .finally((res)=>setLoading(false))

    }, [])


    return(
        <>
        <AnimatePresence>
            {selectedId && (
                <motion.div layoutId={selectedId} onClick={() => setSelectedId(null)} style={styledMotionImg}>
                    <motion.img src={selectedId} style={{width: "80%", maxWidth: "500px"}}/>
                </motion.div>
            )}
        </AnimatePresence>

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
        }}>
            <Header/>

            <motion.div
            style={styleMotion}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{
                scale: 1,
                opacity: 1,
                y: 0
            }}>
                <FilterBreed/>       
            </motion.div>

            <Container selected={loading? true : false}>
                <DogList setSelectedId={setSelectedId}/>  
            </Container>

        </motion.div>
        </>
    )
}


export default Home