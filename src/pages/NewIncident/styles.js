import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    padding: 96px;    

    background-color: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0,0, 0.1);
    border-radius: 8px;
    section{
      width: 100%;
      max-width: 380px;
  }

  section h1{
      margin: 64px 0 32px;
      font-size: 32px; 
  }

  section p{
      font-size: 18px;
      color: #737380;
      line-height: 32px;
  }

  form{
      width: 100%;
      max-width: 450px;
  }

  form input,
  form textarea{
      margin-top: 8px;
  }

    @media (max-width: 780px) {    
      grid-template-columns: 1fr;
      padding: 0px;
      box-shadow: 0 0 0 0 rgba(0, 0,0, 0.1);
    }
`;

export const Container = styled.div`  
  margin: ${px2vw(32)};
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  padding: 96px;
  background-color: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0,0, 0.1);
  border-radius: 8px;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;    
  }

  h1{
    margin-top: 80px;
    margin-bottom: 24px;
  }

`;
