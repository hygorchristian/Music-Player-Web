import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;
  
  h2{
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    color: #B3B3B3;
    letter-spacing: 1.11px;
    margin-bottom: 2px;
  }
  
  ul{
    list-style: none;
  }
`;

export const ItemContainer = styled.li`
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  
  &:hover *, &.selected *{
    color: #ffffff;
  }
  
  .indicator{
    position: absolute;
    width: 4px;
    height: 18px;
    background: #1FD760;
    left: -24px;
  }
  
  span{
    font-size: 14px;
    font-weight: 500;
    color: #b2b2b2;
  }     
`;

