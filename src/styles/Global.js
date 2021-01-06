import { createGlobalStyle } from 'styled-components'

// font
import Roboto from '../fonts/Roboto/Roboto-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #999;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #999;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${Roboto});
    font-style: normal;
  }


  html, body, #root {
    min-height: 100vh;
    height: 100%;
    background-color: #191720;
  }

  body {
    background-color: #191720;
    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    color: #FFF;
  }

  input, button, textarea {
    font-family: 'Roboto', sans-serif;
    background: transparent;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`

export default GlobalStyle
