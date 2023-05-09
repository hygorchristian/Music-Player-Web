import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: "proxima-nova";
    src: url("/fonts/proxima-nova.otf") format("otf");
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root{
    height: 100%;
    min-width: 800px;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'proxima-nova', sans-serif;
    background: #181818;
    color: #ffffff;
    user-select: none;
  }

  button{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
  }
`
