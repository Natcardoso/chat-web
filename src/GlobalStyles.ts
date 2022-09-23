import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
    }

    :root {
        --colorFont: #8c8c8c;
        --white: #fff;
        --gray: #f5f5f5;
        --input: #e5e5e5a6;
        --colorIcons: #8c8c8c63;
        --green: #2dc1aa;
    }
`;
