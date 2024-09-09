import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
 
const GlobalStyles = createGlobalStyle`
    ${reset}

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }



    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        margin-bottom: 100px;
    }

    html, body {
        height: 100%;
    }
    
    ol, ul, li{
        list-style: none;
    }
    
    /* input x버튼 없애기 */
    input::-ms-clear,
    input::-ms-reveal{
        display:none;width:0;height:0;
    }
    input::-webkit-search-decoration,
    input::-webkit-search-cancel-button,
    input::-webkit-search-results-button,
    input::-webkit-search-results-decoration{
        display:none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    #root{
        height: 100%;
    }
`;
 
export default GlobalStyles;