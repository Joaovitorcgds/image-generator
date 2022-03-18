import React from "react";
import styled from "styled-components"


export default function ImageHtml({
  bgColor,
  colorText,
  office,
  tech,
  techList})
{
  return (
    <Container>
      <CreatedImage id="imageHtml" color={`#${bgColor}`}
        backgroundColor={`linear-gradient(to left, #${bgColor}, #000000)`}>
        <Content>
          <img src={`./images/${tech}-logo.png`} alt="logo react" width="180px"/>
          <div>
            <Title colorText={`#${colorText}`}>{office}</Title>
            <Ul>
              <SubTitle color={`#${colorText}`}>{tech}</SubTitle>
              {techList.flat().map((key, value) => {
                return(
                  <SubTitle key={value} color={`#${colorText}`}>{key.country}</SubTitle>
                )
              })}
            </Ul>
          </div>
        </Content>
      </CreatedImage>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CreatedImage = styled.div.attrs(({backgroundColor}) => ({
    style: { background: backgroundColor }
  })
)`
  width: 928px;
  height: 256px;
  display: flex;
  align-items: center;
  padding-left: 260px;
  box-sizing: border-box;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: white;
  max-width: 680px;

  div{
    width: 470px;
  }
`
const Title = styled.h1.attrs(({colorText}) => ({
    style: { color: colorText }
  })
)`
  font-size: 25px;
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  margin-top: 60px;
`

const SubTitle = styled.li`
  display: flex;
  list-style: none;
  font-size: 23px;
  font-weight: bold;
  color: ${props => props.color}
`
