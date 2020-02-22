import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 48px 0 32px;

  
  table#fixed{    
    position: fixed;
    width: calc(100vw - 536px);
    top: 116px; 
    background-color: #181818;
  }
  
  table#hidden{    
    display: none;
  }
  
  table{
    width: 100%;
    border-collapse: collapse;
    
    thead{
      
      th{
        padding: 0 12px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 1.2px;
        line-height: 24px;
        color: #B3B3B3;
        text-transform: uppercase;
        height: 32px;
        border-bottom: 1px solid #282828;
        text-align: left;
        
        i{ 
          color: #B3B3B3;
        }
        
        &:hover{
          color: #ffffff;
          
          i{ 
            color: #ffffff;
          }
        }
      }
    }
    
    tbody{
      
    }
  }
  
`;
