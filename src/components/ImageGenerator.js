import React from "react";
import styled from "styled-components"

export default function ImageGenerator({bgColor, cargo, colorText}){
  const medida = "1080x420";
  const corDeFundo = bgColor;
  return(
    <>
      <Container>
        <img 
          src={`https://via.placeholder.com/${medida}.jpeg/${corDeFundo}/${colorText}?text=${cargo}`} 
          alt="imgem gerada" 
          width="80%"
        />
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
`