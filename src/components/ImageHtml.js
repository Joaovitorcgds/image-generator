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
  width: 928px;
  height: 256px;
  display: flex;
  align-items: center;
  padding-left: 260px;
  box-sizing: border-box;

  @media(max-width: 998px){
    width: 95vw;
    height: 25vh;
  }

  @media(max-width: 890px){
    padding-left: 230px;
  }

  @media(max-width: 842px){
    padding-left: 210px;
  }

  @media(max-width: 810px){
    padding-left: 190px;
  }

  @media(max-width: 731px){
    padding-left: 170px;
  }

  @media(max-width: 425px){
    padding-left: 80px;
  }

  @media(max-width: 375px){
    padding-left: 70px;
  }

  @media(max-width: 330px){
    padding-left: 60px;
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

  @media(max-width: 998px){
    max-width: 65vw;

    div{
      width: 43vw;
    }
  }

  @media(max-width: 840px){
    div{
      width: 45vw;
    }
  }

  @media(max-width: 810px){
    max-width: 70vw;
    
    div{
      width: 50vw;
    }
  }

  @media(max-width: 720px){
    
    div{
      width: 53vw;
    }
  }

  @media(max-width: 425px){
    max-width: 78vw;
    gap: 10px;
  }

  @media(max-width: 375px){
    max-width: 78vw;
    gap: 10px;

    div{
      width: 49vw;
    }
  }

  @media(max-width: 330px){
    max-width: 80vw;
    gap: 10px;

    div{
      width: 48vw;
    }
  }

`

const Image = styled.img`
  width: 180px;
  
  @media(max-width: 998px){
    width: 17vw;
  }

  @media(max-width: 425px){
    width: 25vw;
  }

  @media(max-width: 375px){
    width: 25vw;
  }

  @media(max-width: 323px){
    width: 25vw;
  }

`

const Title = styled.h1.attrs(({colorText}) => ({
    style: { color: colorText }
  })
)`
  font-size: 25px;

  @media(max-width: 998px){
    font-size: 20px;
  }

  @media(max-width: 715px){
    font-size: 17px;
  }

  @media(max-width: 425px){
    font-size: 11px;
  }

  @media(max-width: 375px){
    font-size: 10px;
  }

  @media(max-width: 320px){
    font-size: 8px;
  }


`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
  margin-top: 60px;

  @media(max-width: 320px){
    margin-top: 40px;
  }
`

const SubTitle = styled.li`
  display: flex;
  list-style: none;
  font-size: 23px;
  font-weight: bold;
  color: ${props => props.color};

  @media(max-width: 998px){
    font-size: 18px;
  }

  @media(max-width: 715px){
    font-size: 15px;
  }

  @media(max-width: 425px){
    font-size: 10px;
  }

  @media(max-width: 375px){
    font-size: 8px;
  }

  @media(max-width: 320px){
    font-size: 6px;
  }
`
