import styled from 'styled-components';

export const Container = styled.tr`
  &:hover{
    background-color: #282828;
    
    td{
      .control-button.hide{
        opacity: 1 !important;
      }  
    }        
  }
  
  &.playing{
    background-color: #282828;
    
    & .text *{
      color: #1FD760 !important;
    }    
  }
  
  

  td{
    padding: 0 12px;
    height: 40px;  
    border-bottom: 1px solid #282828;        
    
    &.button{
      width: 44px;
      
      .control-button.hide{
        opacity: 0;
      }
      
      .control-button{
        width: 28px;
        height: 28px;            
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        &.outlined{
          border-radius: 50%;
          border: 1px solid #B3B3B3;
          background-color: #1D1D1D;
        }              
      }
    }
    
    .title, .artist, .album{
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
    }
    
    .date, .time{
      color: #B3B3B3;
      font-size: 15px;
    }
  }
`;
