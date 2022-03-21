import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
html,
body, ul{
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  font-family: 'Roboto Mono', monospace;
  
  @media(max-width: 430px){
    font-size: 48.5%;
  }

  @media(max-width: 380px){
    font-size: 42.5%;
  }

  @media(max-width: 325px){
    font-size: 32.5%;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`