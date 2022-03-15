import React from "react";
import styled from "styled-components"

export default function Header(){
  return(
    <StyleHeader>
      <h1>
        Gerador de Imagem
      </h1>
    </StyleHeader>
  )
}

const StyleHeader = styled.div`
  padding: 1.5rem;
  background: black;

  h1{
    color: #ffffff;
    margin: 0;
    font-size: 3rem;
    text-align: center;
  }
`
