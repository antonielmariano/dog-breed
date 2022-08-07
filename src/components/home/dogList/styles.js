import styled, {css} from "styled-components"

const medias =[
    {
        break: 320,
        width: "90%",
    },
    {
        break: 768,
        width: "calc(100vw - 230px)",
    }
]

export const Container = styled.ul`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 50vh;
   flex-wrap: wrap;
   gap: 60px; 
   list-style-type: none;
   margin-top: 180px;

   ${medias.map(media => css`
    @media(min-width: ${media.break}px){
        width: ${media.width};
    }`)} 

   li{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
        height: 130px;
        border-radius: 8px;
        background-color: var(--background-white);
        z-index: 0;

    img{
        width: 70px;
        object-fit: contain;
    }
   }
`