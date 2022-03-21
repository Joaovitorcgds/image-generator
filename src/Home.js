import React, {useState} from "react"
import  styled from "styled-components"
import html2canvas from 'html2canvas';

import Header from "./components/Header"
import ImageHtml from "./components/ImageHtml"
import Options from "./components/Options"


export default function Home(){
  const [bgColor, setBgColor] = useState("000000");
  const [colorText, setColorText] = useState("ffffff");
  const [office, setOffice] = useState("Digite seu cargo");
  const [tech, setTech] = useState("React")
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
        <Header/>     
        <Descripition>
          Crie agora a sua capa personalizada para o seu perfil do linkedin.
        </Descripition>
        <Options 
          bgColor={bgColor} setBgColor={setBgColor} 
          office={office} setOffice={setOffice}
          colorText={colorText} setColorText={setColorText}
          tech={tech} setTech={setTech}
          setTechList={setTechList} 
        />
        <ImageHtml bgColor={bgColor} colorText={colorText} 
          office={office} tech={tech} 
          techList={techList}/>
          <div
            style={{display: "flex", justifyContent: "center",}}
          >
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