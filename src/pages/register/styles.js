import styled, {css} from "styled-components"

const medias= [
    {
        break: 320,
        display: "none",
        width: "0%",
        widthForm: "90%",
    },
    {
        break: 768,
        display: "block",
        width: "50%",
        widthForm: "35%",
    }
]

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 100px;
    align-items: center;
    background-color: var(--background-blue);
    .div-img{
        display: flex;
        text-align: center;
        width: 50%;
        max-width: 575px;
        ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            display: ${media.display};
            width: ${media.width}
        }`)}
        
        img{
            width: 80%;
        }
    }
    .div-form{
        height: 350px;
        color: var(--background-blue);
        z-index: 1;
        max-width: 400px;
        ${medias.map(media => css`
        @media(min-width: ${media.break}px){
            width: ${media.widthForm}
    }`)}
   
    }
    
`