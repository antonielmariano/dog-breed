import { motion } from "framer-motion"

const DogCard= ({dogImg})=> {

  
    return(
        
        <motion.div
        initial={{ opacity: 0, y: "-100%",}}
        animate={{
            scale: 1,
            opacity: 1,
            y: 0
        }}
        >
            
        <li>
            <img src={dogImg} alt="imagem cachorro"/>
        </li>
        
        </motion.div>
    )
}

export default DogCard