// @ts-nocheck

import styled from 'styled-components';

export const Container = styled.div`  
  
  .image{
    width: ${({width}) => width}px;
    height: ${({width}) => width}px;
    position: relative;
    display: flex;
    cursor: pointer;
    
    &:hover{
      .overlay{
        opacity: 1;
      }
    }
    
    .overlay{
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;  
      background-color: rgba(0,0,0,0.6);
      
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
      height: 100%;
      width: 100%;
      background-color: #242424;      
    }
  }
  
  .info{
    height: 104px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    h4{
      font-size: 14px;
      font-weight: 800;
      margin-top: 12px;
      line-height: 16px;
      cursor: pointer;
      
      &:hover{
        text-decoration: underline;
      }
    }
    
    p{
      font-size: 14px;
      font-weight: 500;
      color: #B3B3B3;
      margin-top: 8px;
      line-height: 20px;
      margin: 0;
      letter-spacing: 0.2px;
      margin-top: 4px;
      cursor: pointer;
      
      &:hover{
        text-decoration: underline;
      }
    }
  }
`;
