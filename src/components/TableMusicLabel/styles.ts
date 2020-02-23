import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 48px 0 32px;
  display: flex;
  flex-direction: column;

  h2{
    font-size: 16px;
    font-weight: 800;
    color: white;
  }
  
  table{
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
    margin-bottom: 20px;
  }
  
  button.btn{
    height: 32px;
    width: 230px;
    display: flex;
    border-radius: 16px;
    flex-direction: row;
    padding: 0 32px;
    border: 1px solid #b4b4b4;
    
    span{
      color: white;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1.3px;
      text-transform: uppercase;
    }
    
    &:hover{
      transform: scale(1.05);
      border-color: white;
    }
    
    &:active{
      transform: scale(1);
      opacity: 0.6
    }
  }

`;
