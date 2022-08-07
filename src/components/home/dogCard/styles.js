import styled from "styled-components"

export const StyledLi = styled.li`
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
`