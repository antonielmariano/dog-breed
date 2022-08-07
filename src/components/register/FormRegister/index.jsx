import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FormRegisterStyled } from "./styles"
import toast from "react-hot-toast"
import api from "../../../services/API"
import Logo from "../../../assets/images/logo.svg"
import { useContext } from "react"
import { LoggedUserContext } from "../../../context/loggedUser"

const FormRegister = ()=> {

    const {setLoggedUser} = useContext(LoggedUserContext)

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("Email inválido")
    })

    const {
        register, 
        handleSubmit, 
        formState: {errors}} = useForm({resolver: yupResolver(formSchema)})

    const onSubmit = (data)=>{
        const requestApi = api.post("/register", data)

        toast.promise(
            requestApi,
             {
               loading: 'Criando conta',
               success:(resData)=>{
                localStorage.setItem("tokenDB", resData.data.user.token)
                setTimeout(()=>{
                    setLoggedUser(true)
                }, 1400)
                return "Conta criada com sucesso!"
               },
               error: "Não foi possivel, verifique os campos",
             }
           );
    }

    return(
        <FormRegisterStyled onSubmit={handleSubmit(onSubmit)}>
            <img src={Logo} alt="cachorro no meio da letra D"/>
            <div>
                <input placeholder="Insira seu melhor email" {...register("email")}/>
                {errors && <h6>{errors.email?.message}</h6>}
            </div>
            <button type="submit">Criar Conta</button>
        </FormRegisterStyled>
    )
}


export default FormRegister