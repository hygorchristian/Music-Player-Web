import styled from 'styled-components';

export const Container = styled.tr`
  height: 40px;
  
  &:hover{
    background-color: #282828;
  }

  td{
    border-bottom: 1px solid #282828;
  }

  .image{
    height: 40px;
    width: 40px;
    
    img{
      height: 40px;
      width: 40px;
      object-fit: cover;
      
    }
    
  }
`;
