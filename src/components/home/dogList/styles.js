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
    gap: 40px 30px; 
    list-style-type: none;
    margin-bottom: 20px;

   ${medias.map(media => css`
    @media(min-width: ${media.break}px){
        width: ${media.width};
    }`)} 
`

export const ContentList = styled.footer`
    display: flex;
    justify-content:center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 90%;
    max-width:700px;
    .list-navigation{
        list-style-type: none;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-wrap: wrap;
        gap:20px;
        li{
            display: flex;
            justify-content:center;
            align-items: center;
            width:40px;
            height: 25px;
            background-color: var(--background-white);
            color: var(--background-blue);
            border-radius: 4px;
            a{
                width:100%;
                font-weight: bold;
                text-align: center;
            }
        }
        .pagination__link--active{
            width:40px;
            background-color: var(--primary-color);
            color: var(--background-white)
        }
    }
`