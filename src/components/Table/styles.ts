import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 48px 0 32px;

  
  table{
    width: 100%;
    border-collapse: collapse;
    
    thead{
      th{
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 1.2px;
        line-height: 24px;
        color: #B3B3B3;
        text-transform: uppercase;
        height: 32px;
        border-bottom: 1px solid #282828;
        text-align: left;
        
        &:hover{
          color: #ffffff;
        }
      }
    }
    
    tbody{
      tr{
        &:hover{
          background-color: #282828;
        }
      }
    
      td{
        height: 40px;  
        border-bottom: 1px solid #282828;
        
        
        &.button{
          width: 44px;
          
          
          button{
            width: 28px;
            height: 28px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            
            svg{
              height: 100%;
              width: 100%;
              fill: white;
            }
          }
        }
      }
    }
  }
  
`;
