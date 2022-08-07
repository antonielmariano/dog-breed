import styled, {css} from "styled-components"

const medias =[
    {
        break: 320,
        width: "90%",
        marginLeft: "0px",
        marginRight: "0px"
    },
    {
        break: 768,
        width: "100%",
        marginLeft: "115px",
        marginRight: "115px"
    }
]

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-white);
    height: 80px;
    width: 100%;
    position: fixed;
    z-index: 1;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${medias.map(media => css`
    @media(min-width: ${media.break}px){
        width: ${media.width};
        margin-left: ${media.marginLeft};
        margin-right: ${media.marginRight};
        
    }`)} 

    img{
        width: 150px;
    }

    button{
        padding: 7px 25px;
        border-radius: 4px;
        font-size: 14px;
        transition: .3s;
        font-weight: bold;
        :hover{
            background-color: #b34646;
            color: var(--background-white);
            transition: .3s;
        }
    }
`