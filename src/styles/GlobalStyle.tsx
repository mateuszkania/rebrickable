import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import bgImage from "@/assets/images/bg.svg";

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: ${theme.fonts.primary};
        background-image: url(${bgImage});
        background-size: cover;
        background-position: right bottom;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 50px 15px;
    }
    
    form {
        width: 1000px;
    }
    
    h1, h2, h3 {
        font-family: "Russo One", sans-serif;
        line-height: 1.5;
        margin: 0 0 20px;
    }
    
    h1 {
        font-size: 40px;
        margin-bottom: 50px;
    }
    
    h2 {
        font-size: 30px;
        margin-bottom: 30px;
    }
    
    h3 {
        font-size: 16px;
        text-align: center;
    }
    
    ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export default GlobalStyle;
