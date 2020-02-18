import styled from 'styled-components';

export const Container = styled.div`
  .MuiSwitch-root{
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
    
  .MuiIconButton-root:hover{
    background-color: transparent;
    
    .MuiSwitch-thumb{
      background-color: #ffffff;
    }
  }
    
  .MuiSwitch-switchBase{
    top: -1px;
  }
        
  .MuiSwitch-root{
    width: 64px;
  }
    
  .MuiTouchRipple-root{
    display: none;
  }
  
  .MuiSwitch-thumb{
    height: 22px;
    width: 22px;
    transition: all 150ms ease-in-out;
  }
  
  .MuiSwitch-track{
    height: 22px;
    width: 40px;
    border-radius: 11px;
    background-color: #000000;
    border: 2px solid #404040;      
  }
  
  .MuiSwitch-colorSecondary.Mui-checked{
    color: #ffffff;
  }
  
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track{
    background-color: #1EB954;
    border: none;
  }
  
  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track{
    opacity: 1;
  }  
`
