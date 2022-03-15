import React, {useState} from "react"
import ButtonDownload from "./components/ButtonDonwnload"
import Header from "./components/Header"
import ImageGenerator from "./components/ImageGenerator"
import Options from "./components/Options"
import { Descripition } from "./style/Description"

export default function Home(){
  const [bgColor, setBgColor] = useState("");
  const [colorText, setColorText] = useState("");
  const [cargo, setCargo] = useState("Digite seu cargo");
  

  return(
    <>
      <header>
        <Header/>     
      </header>
      <main>
        <Descripition>
          Crie agora a sua imagem de fundo personalizada para o seu perfil do linkedin.
        </Descripition>
        <Options 
          bgColor={bgColor} setBgColor={setBgColor} 
          setCargo={setCargo}
          colorText={colorText} setColorText={setColorText}
        />
        <ImageGenerator bgColor={bgColor} cargo={cargo} colorText={colorText}/>
        <ButtonDownload bgColor={bgColor} cargo={cargo} colorText={colorText}/>
      </main>
    </>
  )
}