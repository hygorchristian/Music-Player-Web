// @ts-nocheck

import styled from 'styled-components';

export const Container = styled.div`  
  
  .image{
    width: ${({ width }) => width}px;
    height: ${({ width }) => width}px;
    position: relative;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    &:hover{
      .overlay{
        opacity: 1;
      }
    }
    
    .overlay{
      opacity: 0;
      position: absolute;
      display: flex;
      width: 90%;
      height: 90%;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;  
      background-color: rgba(0,0,0,0.6);
      border-radius: 50%;
      
      button{
        height: 36px;
        width: 36px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        &.big{
          height: 56px;
          width: 56px;
          border-radius: 50%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background-color: rgba(30,30,30,0.6);
          border: 1px solid #B0B0B0;
          
          &:hover{
            transform: scale(1.05);
            border-color: #ffffff;
            background-color: rgba(0,0,0,0.8);
          }
          
          &:active{
            opacity: 0.6;
            transform: scale(1);
            background-color: rgba(0,0,0,0.8);
          }
        }
      }
    }  
        
    img{
      height: 90%;
      width: 90%;
      background-color: #242424;  
      border-radius: 50%;   
    }
  }
  
  .info{
    height: 104px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    h4{
      font-size: 16px;
      font-weight: 800;
      margin-top: 14px;
      line-height: 16px;
      cursor: pointer;
      width: 100%;
      text-align: center;
      
      &:hover{
        text-decoration: underline;
      }
    }
  }
`
