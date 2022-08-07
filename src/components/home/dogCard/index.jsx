import { motion } from "framer-motion"
import { StyledLi } from "./styles"

const DogCard= ({dogImg, setSelectedId})=> {

  
    return(
        <>
        <motion.div
        layoutId={dogImg} 
        onClick={() => setSelectedId(dogImg)}
        >
            
        <StyledLi>
            <img src={dogImg} alt="imagem cachorro"/>
        </StyledLi>
        
        </motion.div>
        </>
    )
}

export default DogCard