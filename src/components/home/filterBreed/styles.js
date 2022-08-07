import styled, {css} from "styled-components"

const medias =[
    {
        break: 320,
        justifyContent: "flex-start",
        width: "90%"
    },
    {
        break: 455,
        justifyContent: "center",
        width: "100%"
    }
]

export const Content = styled.section`
    display: flex;
    align-items: center;
    gap: 20px;
    overflow-x: auto;
    ${medias.map(media => css`
    @media(min-width: ${media.break}px){
        justify-content: ${media.justifyContent};
        width: ${media.width}
    }`)} 
`

export const StyledButton = styled.button`
    padding: 9px 20px;
    border-radius: 8px;
    font-weight: bold;
    background-color: ${(({selected})=> selected ? "var(--primary-color)" : "var(--background-grey)")};
    color: ${(({selected})=> selected ? "var(--background-white)" : "var(--secondary-color)")};
    transition: .3s;
    :hover{
        box-shadow: 0 1px 4px 2px rgba(0,0,0,0.2),0 1px 10px 2px rgba(0,0,0,0.19);
        background-color: ${(({selected})=> !selected && "var(--background-white)")};
        transition: .3s;
    }
`