import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        line-height: 1.5;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.colors.offwhite};
        word-break: break-word;
    }
`