import React, {useState} from "react";
import styled from "styled-components";
import { Multiselect } from "multiselect-react-dropdown"

export default function Options({
  bgColor, 
  setBgColor,
  office, 
  setOffice, 
  colorText, 
  setColorText,
  setTech,
  setTechList})
{
  const technology = {
    React: "React",
    Angular: "Angular",
    Vue: "Vue",
    Python: "Python",
    PHP: "PHP"
  }
  
  const data = [
    {country: "HTML", id: 1},
    {country: "CSS", id: 2},
    {country: "JavaScript", id: 3},
    {country: "Git", id: 4},
    {country: "TypeScript", id: 5}
  ];
  const [options] = useState(data);

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
    setOffice(value)
  }

  function getTech(e){
    let value = e.target.value;
    setTech(value)
  }

 
  return(
    <Form onSubmit={(e) => e.preventDefault()}>
      <Container>
        <Cor>
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
        </Cor>
        <InputType>
          <select name="tech" onChange={(e) => getTech(e)}>
            {Object.entries(technology).map((key, value) => {
              return(
                <option value={key[0]} key={value}>{key[1]}</option>
              )
            })}
          </select>
          <label htmlFor="tech">Tech</label>
        </InputType>
      </Container>
      
      <Container2>
        <InputType>
          <Multiselect className="searchWrapper"
            options={options}
            displayValue="country"
            selectionLimit={3}
            onSelect={(selectedList) => setTechList([selectedList])}
            placeholder="Escolha 3 skills"
            style={{
              multiselectContainer: {width: "250px", padding: 0,
              border: "1px black solid"},
              searchBox:{ border: "none", padding: 0, textAlign:"center"},
              chips: { background: 'black', fontSize: "1rem", padding: "5px",
              margin: "3px"},
              optionContainer: { border: "none"},
              inputField: {padding: 0, margin: 0, fontSize: "1.5rem"},
              option: {color: "black", fontSize: "1.2rem",textAlign: "center"
              ,borderLeft: "1px black solid", borderRight: "1px black solid"}
            } }/>
          <label htmlFor="sub-tech">Skills</label>
        </InputType>
        <InputType>
          <input type="text" name="cargo"
            value={office} onChange={e => profession(e)}/>
          <label htmlFor="cargo">Cargo</label>
        </InputType>
      </Container2>
    </Form>
  )
}


const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 747px;
  margin: auto;
  margin-bottom: 20px;

  @media(max-width: 390px){
    flex-direction: column;
    row-gap: 15px;
  }

`;

const Cor = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media(max-width: 390px){
    width: 75vw;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40vw;

  @media(max-width: 500px){
    flex-direction: column;
    row-gap: 15px;
  }

`

const Container2 = styled.div`
  display: flex;
  gap: 10px;

  align-items: flex-start;
  flex-direction: column-reverse;
  @media(max-width: 660px){
    
    
  }
`

const InputType = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 5px;
  align-items: center;

  input, select{
    width: 8.0rem;
    height: 3rem;
    padding: 0.3rem;
    text-align: center;
  }

  input[type= text]{
    width: 25rem;
  }

  label{
    font-size: 1.5rem;
    font-weight: bold;
  }

`