import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --primary-color: #261A40;
    --secondary-color: #B1AEFF;
    --tertiary-color:#6E03FF;
    --neutral-color: #FAFAFA;
}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyle;
