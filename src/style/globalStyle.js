import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`
html,
body, ul{
  padding: 0;
  margin: 0;
  font-size: 62.5%;
  font-family: 'Roboto Mono', monospace;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`