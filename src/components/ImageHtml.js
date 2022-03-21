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
          <Image src={`./images/${tech}-logo.png`} alt="logo react"/>
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
  width: 90vw;
  height: 246px;
  display: flex;
  align-items: center;
  padding-left: 260px;
  box-sizing: border-box;

  @media(max-width: 770px){
    height: 175px;
    padding-left: 200px;
  }

  @media(max-width: 430px){
    height: 95px;
    padding-left: 110px;
  }

  @media(max-width: 380px){
    height: 85px;
    padding-left: 100px;
  }

  @media(max-width: 325px){
    height: 76px;
    padding-left: 80px;
  }
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

  @media(max-width: 770px){
    gap: 10px;
    div{
      width: 47vw;
    }
  }

  @media(max-width: 430px){
    gap: 5px;
    div{
      width: 46vw;
    }
  }

  @media(max-width: 380px){
    gap: 5px;
    div{
      width: 46vw;
    }
  }

  @media(max-width: 325px){
    width: 205px;
    div{
      width: 160px;
    }
  }
`

const Image = styled.img`
  width: 180px;

  @media(max-width: 770px){
    width: 120px;
  }

  @media(max-width: 430px){
    width: 70px;
  }

  @media(max-width: 380px){
    width: 60px;
  }

  @media(max-width: 325px){
    width: 50px;
  }
`

const Title = styled.h1.attrs(({colorText}) => ({
    style: { color: colorText }
  })
)`
  font-size: 25px;
  margin: 0;

  @media(max-width: 770px){
    font-size: 19.5px;
  }

  @media(max-width: 430px){
    font-size: 10.7px;
  }

  @media(max-width: 380px){
    font-size: 9.4px;
  }

  @media(max-width: 325px){
    font-size: 8.3px;
  }

`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  margin-top: 60px;

  @media(max-width: 770px){
    margin-top: 35px;
    padding-right: 10px;
  }

  @media(max-width: 430px){
    margin-top: 25px;
    padding-right: 5px;
  }
`

const SubTitle = styled.li`
  display: flex;
  list-style: none;
  font-size: 21px;
  font-weight: bold;
  color: ${props => props.color};

  @media(max-width: 770px){
    font-size: 16.3px;
  }
  
  @media(max-width: 430px){
    font-size: 8.4px;
  }

  @media(max-width: 380px){
    font-size: 7.8px;
  }

  @media(max-width: 325px){
    font-size: 6.7px;
  }
`
