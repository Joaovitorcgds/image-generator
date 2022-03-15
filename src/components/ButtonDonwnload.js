import React from "react";
import styled from "styled-components"

export default function ButtonDownload({bgColor, cargo, colorText}){
  // const medida = "747x186";
  // const corDeFundo = bgColor;

  const imagem = `https://via.placeholder.com/1920x1080.jpeg/${bgColor}/${colorText}?text=${cargo}`

  return(
    <>
      <Download>
        <a href={`${imagem}`} target="_blank" rel="noreferrer" download={imagem}>
          Download
        </a>
      </Download>
    </>
  )
}

const Download = styled.div`
  margin-top: 5rem;
  text-align: center;
  font-size: 2.5rem;

  a{
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    background-color: #0e90ad;
  }
`