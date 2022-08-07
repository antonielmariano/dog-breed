import { useContext } from "react"
import { ListDogsContext } from "../../../context/listDogs"
import { LoadingPageContext } from "../../../context/loadingPage"
import DogCard from "../dogCard"
import { Container } from "./styles"
import { Oval } from 'react-loading-icons'

const DogList= ()=> {

    const {listDogs} = useContext(ListDogsContext)
    const {loading} = useContext(LoadingPageContext)
  
    return(
        <Container>
            { loading ? 
            (<Oval strokeWidth={5} />)
            :
            (listDogs.list?.map(dog=> <DogCard dogImg={dog}/>))}
        </Container>
    )
}

export default DogList