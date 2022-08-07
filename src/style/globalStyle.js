import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
    width: 10px;
    height: 3px;
}
         
::-webkit-scrollbar-thumb {
    background: var(--background-white); 
    border-radius: 10px;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#root {
    display: flex;
    justify-content: center;
    align-items: center;
}

:root{
    --background-blue: #0E6ABE;
    --background-grey: #eceaed;
    --background-white: white;
    --primary-color: #BF711E;
    --secondary-color: #000;
}

body{
    font-family: 'Inter', sans-serif;
}
button{
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    border: none;
    background-color: var(--background-grey);
}
input{
    font-family: 'Inter', sans-serif;
    border: none;
    outline: none;
    background-color: var(--background-grey);
}
li{
    cursor: pointer;
    border: none; 
}

`

export default GlobalStyle