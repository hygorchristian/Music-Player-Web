import styled from 'styled-components';

export const Container = styled.tr`
  
  &.playing{    
    background-color: #282828;
         
    .text{
      color: #20D760;
    }
  }
  
  &:hover{
    background-color: #282828;
    
    button.play{
      display: flex;
    }
    
    span.index{
      display: none;
    }
  }

  td{
    border-bottom: 1px solid #282828;
    
    .image{
      height: 40px;
      width: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      
      img{
        height: 40px;
        width: 40px;
        object-fit: cover;        
      }    
    }    
    
    .button-container{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 40px;
      
      button{
        display: none;
        height: 28px;
        width: 28px;
        border-radius: 50%;
        border: 1px solid #B3B3B3;
        background-color: #1D1D1D;
        
        flex-direction: row;
        align-items: center;
        justify-content: center;       
      }
      
      span{
        display: block;
        color: #B3B3B3;
        font-family: Montserrat;
        font-size: 13px;
      }     
    }
    
    .fav{
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;
      padding-left: 6px;
    }
  }

  
  
  
`;
