import React from "react";
import styled from "styled-components";
import Iot from "./images/IOT.png";
import CybBackground from "./images/space.jpg";
import { Marginer } from "./marginer";



const ContentContainer = styled.div`
width:100%;
height:500px; 
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
background: url(${CybBackground});
background-size: 100% 100%;
`;

const Img = styled.div`
${'' /* background-color: red; */}
color: white;
display: flex;
flex-direction: column;
margin: 100px 50px 100px;



img{
float: left;
  ${'' /* border: 2px solid #575757; */}
  padding: 10px;
    width: 300px;
    height: 300px;  
}
`;

const Description = styled.div`

heading{
    font-size: 40px
}

text-align: justify;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-around;
color: white;
margin: 100px 50px 100px;
font-size: 20px

`;


function IOT() {
    return (

        <div>
            <ContentContainer>

            <Img>

<img src = {Iot} alt ="cybersecurity" />
</Img>
<Marginer direction = "horizontal" margin = {400} />
            <Description>
            <heading>IOT</heading>
            <Marginer direction = "vertical" margin = {50} />
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

            </Description>
            
           

            </ContentContainer>

        </div>

    );

    
}

export default IOT;