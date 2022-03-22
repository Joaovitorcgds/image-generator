import React, {useState} from "react";
import styled from "styled-components";
import { Multiselect } from "multiselect-react-dropdown"

export default function Options({
  bgColor, 
  setBgColor, 
  setOffice, 
  colorText, 
  setColorText,
  tech,
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
    <Form onSubmit={(e) => e.preventDefault()} autoComplete="off">
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
          <select name="tech" required onChange={(e) => getTech(e)}>
          <option value={tech}>Selecione</option>
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
            onRemove= {(removedItem) => setTechList([removedItem])}
            placeholder="Escolha 3 skills"
            style={{
              multiselectContainer: {maxWidth: "250px", padding: 0,
              border: "1px solid black"},
              searchBox:{ border: "none", padding: "2px 3px", textAlign:"center"},
              chips: { background: 'black', fontSize: "1.5rem", padding: "2px 3px",
              margin: "1px",},
              optionContainer: { border: "none"},
              inputField: {padding: 0, margin: 0, fontSize: "1.5rem"},
              option: {color: "black", fontSize: "1.5rem",textAlign: "center"
              ,borderLeft: "1px black solid", borderRight: "1px black solid"}
            } }/>
          <label htmlFor="sub-tech">Skills</label>
        </InputType>
        <InputType>
          <input type="text" name="cargo"
            placeholder="Digite seu cargo" onChange={e => profession(e)}/>
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
  gap: 35px;
  max-width: 747px;
  width: 80vw;
  margin: 0 auto 20px;

  @media(max-width: 425px){
    flex-direction: column;
    row-gap: 15px;
  }

`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;

  @media(max-width: 650px){
    flex-direction: column;
    row-gap: 15px;
  }

`

const Cor = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;

  @media(max-width: 425px){
    width: 75vw;
    flex-direction: row;
    justify-content: space-between;
  }
`

const Container2 = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column-reverse;
`

const InputType = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 5px;
  align-items: center;
  font-size: 1.5rem;

  input, select{
    width: 100px;
    height: 30px;
    padding: 3px;
    text-align: center;
    font-size: 1.5rem;
  }

  input[type= text]{
    width: 25rem;
    font-size: 1.5rem;
  }

  label{
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media(max-width: 325px){
    input{
    width: 50px;
    height: 25px;
    padding: 2px;
    }
    
    select{
    width: 70px;
    height: 25px;
    padding: 2px;
    }

  }

`