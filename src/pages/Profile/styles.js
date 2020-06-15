import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;        
  }

  h1{
    margin-top: 80px;
    margin-bottom: 24px;
  }

  img{
    height: 64px;
  }

  a{
    width: ${px2vw(520)};    
    max-width: 260px;        
    margin-left: auto;
    margin-top: 0;
  }
  button{
    height: 60px;
    width: 60px;
    border-radius: 8px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
  }

  button:hover{
    border-color: #999;
  }

  span{
    font-size: 20px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    a{
      font-size: 100%;      
    }    
  }
`;

export const Title = styled.div`
  margin-left: 3%;  
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  justify-content: center;
  align-items: stretch;
  margin: ${px2vw(32)};
  max-width: 100%;
  margin-top: 0%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;    
  }

  @media (max-width: 768px) {    
    grid-template-columns: 1fr;
  }

  h1{
    margin-top: 80px;
    margin-bottom: 24px;
  }

`;

export const Box = styled.div`  
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  display: flex;
  flex-direction: column;  
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  height: 100%;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  
  @media (max-width: 768px) {        
    width: 95%;
  }

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(600)};    
    min-height: ${px2vw(300)};
    height: 100%;
  }

  strong{
    display: block;
    margin-bottom: 16px;
    color: #41414D;
  }
  p + strong{
    margin-top: 32px;
  } 

  p{
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
  .btn-remove{
      position: absolute;
      right: 24px;
      top: 24px;
      border: 0;
      background: transparent;
  }
  .btn-remove:hover{
      opacity: .8;
  }
  form{
    margin-top: ${px2vw(100)};
  }
  h1{
    font-size: 2em;
    margin-bottom: ${px2vw(32)}
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;