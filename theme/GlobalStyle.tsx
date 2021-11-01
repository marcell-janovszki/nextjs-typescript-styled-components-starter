// styled-components
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 16px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: ${({ theme }) => theme.components.body.background};
    color: ${({ theme }) => theme.components.body.font};

    font-family: 'Inter', sans-serif;
}
`

export default GlobalStyle
