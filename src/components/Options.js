import React from "react";
import styled from "styled-components";

export default function Options({
  bgColor, 
  setBgColor, 
  setCargo, 
  colorText, 
  setColorText})
{
  function bgColorSelect(e){
    e.preventDefault();
    const corEscolhida = e.target.value;
    let corEscolhidaModificada = corEscolhida.replace("#","")
    setBgColor(corEscolhidaModificada)
  }

  function colorTextSelect(e){
    e.preventDefault();
    const corEscolhida = e.target.value;
    let corEscolhidaModificada = corEscolhida.replace("#","")
    setColorText(corEscolhidaModificada)
  }

  function profession(e){
    const value = e.target.value;
    setCargo(value)
  }

 
  return(
    <Form>
      <InputType>
        <input 
          type="color" id="background" 
          name="background" value={`#${bgColor}`} onChange={e => bgColorSelect(e)}/>
        <label htmlFor="background">Cor de fundo</label>
      </InputType>

      <InputType>
        <input 
          type="color" name="colorText"
          value={`#${colorText}`} onChange={e => colorTextSelect(e)}/>
        <label htmlFor="colorText">Cor da fonte</label>
      </InputType>

      <InputType>
        <input type="text" name="cargo" onChange={e => profession(e)}/>
        <label htmlFor="cargo">Cargo</label>
      </InputType>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 747px;
  margin: auto;
`;

const InputType = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  input{
    width: 8.0rem;
    height: 3rem;
    padding: 0.3rem;
    text-align: center;
  }

  input[type= text]{
    width: 20rem;
  }

  label{
    font-size: 1.5rem;
    font-weight: bold;
  }

`