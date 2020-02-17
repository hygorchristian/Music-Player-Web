import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 256px;
  background-color: #121212;
  z-index: 1000;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  
  .ball-lg{
    height: 700px;
    width: 700px;
    background-image: linear-gradient(#2D2D2D, #161616);
    border-radius: 50%;
    top: 50%;
    margin-top: -350px;
    right: -600px;
    position: absolute;
  }
  
  .ball-md{
    height: 400px;
    width: 400px;
    background-image: linear-gradient(90deg, #2D2D2D, #161616);
    border-radius: 50%;
    top: -230px;
    right: -220px;    
    position: absolute;
  }
  
  .text{
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 50;
    
    h2{
      width: 210px;
      font-size: 18px;
      font-weight: 800;
      line-height: 24px;
      text-align: center;
    }
    
    button{
      margin-top: 50px;
      height: 32px;
      width: 160px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: 1px solid #B3B3B3;
      border-radius: 16px;
      transition: opacity 100ms ease-in-out;
      
      &:hover{
        transform: scale(1.05);
        border-color: #ffffff;
      }
      
      &:active{
        opacity: 0.6;
        transform: scale(1);
        border-width: 1px;
      }
      
      .label{
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 1.3px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
  }
`
