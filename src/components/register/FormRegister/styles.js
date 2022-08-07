import styled  from "styled-components"

export const FormRegisterStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: white; 
    gap: 30px;
    img{
            width: 50%;
        }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input{
            padding: 10px;
            border-radius: 7px;
            color: var(--background-blue);
            text-align: center;
        }

        h6{
            margin-top: 55px;
            color: red;
            position: absolute;
        }
    }
    
    button{
        padding: 8px 20px;
        border-radius: 7px;
        transition: .3s;
        font-weight: bold;
        :hover{
            background-color: var(--background-blue);
            color: var(--background-white);
            transition: .3s;
        }
    }
`