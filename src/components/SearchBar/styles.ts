import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  
  .filter{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 36px;
    flex: 1;
    border-radius: 3px;
    padding: 0 12px;
    
    &:hover, &.focus{    
      i{ color: #ffffff }
      input{ color: #ffffff }
      input::placeholder{ color: #ffffff }
    }
    
    &.focus{      
      background-color: #404040;
    }
    
    div{
      height: 14px;
    }
    
    i{
      color: #A6A6A6;
    }
    
    input{
      margin-left: 12px;
      height: 100%;
      width: 100%;
      font-size: 14px;
      background-color: transparent;
      border: none;
      color: white;
    
      &::placeholder{
        font-weight: 600;
        color: #757575
      }
    }
    
    button{
      height: 14px;
      width: 14px;
      display: flex;
      flex-direction: row;
      
      &:hover{
        transform: scale(1.05);
        
        i{
          color: white;
        }
      }
      
      &:active{
        transform: scale(1);
        opacity: 0.6
      }
      
      i{
        color: #aaaaaa;
      }
    }
  }
  
  .download{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 16px;
    
    .label{
      font-size: 14px;
      color: #b3b3b3;
      font-weight: 500;
    }    
  }
`;
