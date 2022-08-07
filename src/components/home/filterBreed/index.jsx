import { useContext, useState } from "react"
import { ListDogsContext } from "../../../context/listDogs"
import { LoadingPageContext } from "../../../context/loadingPage"
import api from "../../../services/API"
import { Content, StyledButton } from "./styles"

const FilterBreed = ()=> {

    const {setListDogs} = useContext(ListDogsContext)

    const {setLoading} = useContext(LoadingPageContext)

    const breeds = ["chihuahua", "husky", "labrador", "pug"]

    const [selected, setSelected] = useState("chihuahua")

    const token = localStorage.getItem("tokenDB")

    const showBreed = (breed) =>{
        setLoading(true)
        api.get(`/list?breed=${breed}`,{headers: {
            Authorization: `${token}`,
        }})
        .then(res => setListDogs(res.data))
        .finally((res)=>setLoading(false))
    }
  
    return(
        <Content>
            {breeds.map(breed => <StyledButton key={breed} onClick={()=> {
                setSelected(breed)
                showBreed(breed)
            }} selected={breed === selected ? true : false}>{breed}</StyledButton>)}
        </Content>
    )
}

export default FilterBreed