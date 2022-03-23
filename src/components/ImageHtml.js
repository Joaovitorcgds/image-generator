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
          {tech === "" || <Image 
          src={`./images/${tech}-logo.png`} 
          alt={`logo${tech}`}/>}
          <div>
            <Title colorText={`#${colorText}`}>{office}</Title>
            <Ul>
              <SubTitle colorText={`#${colorText}`}>{tech}</SubTitle>
              {techList.flat().map((key, value) => {
                return(
                  <SubTitle key={value} colorText={`#${colorText}`}>{key.country}</SubTitle>
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
    height: 23vh;
    padding-left: calc(100% - 73.6vw);
  }

  @media(max-width: 580px){
    height: 18vh;
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
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  color: white;
  width: calc(100% - 1vw);

  div{
    width: 100%;
  }

  @media(max-width: 770px){
    gap: 10px;
  }

  @media(max-width: 430px){
    gap: 5px;
  }

`

const Image = styled.img`
  width: 180px;

  @media(max-width: 850px){
    width: 150px;
  }

  @media(max-width: 770px){
    width: 120px;
  }

  @media(max-width: 580px){
    width: 85px;
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
  font-size: 2.2vw;
  text-align: center;
  margin: 0;

  @media(max-width: 920px){
    font-size: 2vw;
  }

  @media(max-width: 870px){
    font-size: 1.8vw;
  }

  @media(max-width: 770px){
    font-size: 2.5vw;
  }

  @media(max-width: 580px){
    font-size: 2.4vw;
  }

  @media(max-width: 410px){
    font-size: 2.2vw;
  }

  @media(max-width: 325px){
    font-size: 8.3px;
  }

`
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 60px;

  @media(max-width: 770px){
    margin-top: 30px;
  }

  @media(max-width: 430px){
    margin-top: 20px;
  }
`

const SubTitle = styled.li.attrs(({colorText}) => ({
  style: { color: colorText }
})
)`
  display: flex;
  list-style: none;
  font-size: 2vw;
  font-weight: bold;

  @media(max-width: 900px){
    font-size: 1.5vw;
  }

  @media(max-width: 770px){
    font-size: 2vw;
  }

  @media(max-width: 580px){
    font-size: 1.8vw;
  }
  
  @media(max-width: 430px){
    font-size: 1.7vw;
  }

  @media(max-width: 380px){
    font-size: 2vw;
  }

  @media(max-width: 325px){
    font-size: 6.7px;
  }
`
