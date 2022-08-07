import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: ${(({selected})=> selected ? "center" : "flex-start")} ; 
    align-items: center;
    padding-top: 170px;
    min-height: 100vh;
    background-color: var(--background-blue);
`