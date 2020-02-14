// @ts-nocheck

import styled from 'styled-components';

export const Container = styled.li`
  height: 26px;
  margin-bottom: 15px;
  padding-left: 24px;
  color: #B3B3B3;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  
  .indicator{
    display: block;
    position: absolute;
    width: 4px;
    height: 26px;
    background-color: #1FD760;
    left: 0;
    top: 0;
  }
  
  &:hover, &.selected{
    color: #ffffff;
    
    svg{
      fill: #ffffff !important;
      stroke: #ffffff !important;
    }
  }    
  
  svg{
    fill: #B3B3B3;
    stroke: #B3B3B3;
  }
  
  .icon{
    height: 26px;  
    width: 26px;      
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .label{
    font-size: 14px;
    font-weight: 800;
    margin-left: 15px;
    
    &.selected{
      color: #ffffff;
    }
  }
`;
