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
      tr:hover{
        background-color: #282828;
        
        td{
          .control-button{
            opacity: 1;
          }  
        }        
      }
    
      td{
        padding: 0 12px;
        height: 40px;  
        border-bottom: 1px solid #282828;        
        
        &.button{
          width: 44px;
          
          .control-button{
            opacity: 0;
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
    }
  }
  
`;
