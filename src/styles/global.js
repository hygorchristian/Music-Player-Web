import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  
  html, body, #root{
    height: 100%;
  }
  
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: proxima-nova, sans-serif;
    background: #181818;
    color: #ffffff;
    user-select: none;
  }  
  
`
