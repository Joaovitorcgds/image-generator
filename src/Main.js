import React, {useState} from "react"
import styled from "styled-components"
import html2canvas from 'html2canvas';

import ImageHtml from "./components/ImageHtml"
import Options from "./components/Options"


export default function Main(){
  const [techList, setTechList] = useState(["exemple1", "exemple2"]);

  function downloadImage(){
    const screenshotTarget = document.querySelector("#imageHtml")
    html2canvas(screenshotTarget).then(canvas => {
      const base64image = canvas.toDataURL("image/png");
      var anchor = document.createElement("a");
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "my-image.png");
      anchor.click();
      anchor.remove()
    })
  }

  return(
    <>     
      <Descripition>
        Crie agora a sua capa personalizada para o seu perfil do linkedin.
      </Descripition>
      <Options setTechList={setTechList} />
      <ImageHtml techList={techList}/>  
      <div style={{display: "flex", justifyContent: "center",}}>
        <Button onClick={() => downloadImage()}>Download</Button>
      </div>
    </>
  )
}

const Descripition = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0 auto 20px;
  max-width: 747px;
  width: 90vw;
`

const Button = styled.button`
  padding: 10px 15px; 
  margin-top: 25px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
  background: black;
  color: white;
  transition: background 0.5s;

  :hover{
    background: rgba(0, 0, 0, 0.8);
  }
`