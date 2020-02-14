// @ts-nocheck

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ fixed }) => fixed ? 116 : 240}px;
  max-height: ${({ fixed }) => fixed ? 116 : 1000}px;
  position: ${({ fixed }) => fixed ? 'fixed' : 'relative'}; 
  border-bottom:${({ fixed }) => fixed ? '1px solid #282828' : 'none'};
  
  .overlay{
    height: 100%;
    width: 100%;
    background-color: #121212;
    position: absolute;
    opacity: ${({ overlay }) => overlay};
  }
  
  .gradient{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-bottom: 52px;
    padding-left: 32px;
    position: absolute;
    background-image: linear-gradient(#414141, #181818);
  }
  
  .content{
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    .header-info{
      position: absolute;
      bottom: 0;
      display: flex;
      padding-left: 32px;
      transition: all 200ms ease-in-out;
      
      &.fixed{
        bottom: 300px;
      }
      
      h3{
        font-size: 48px;
        font-weight: 800;
        margin-bottom: 40px;
      }
    }
    
    .subheader-info{
      position: absolute;
      bottom: -100px;
      padding-left: 32px;
      transition: all 150ms ease-in-out;
      
      &.fixed{
        bottom: 0;
      }
      
      h4{
        font-size: 28px;
        font-weight: 800;
        margin-bottom: 18px;
      }
    }
  }
`

export const Fixed = styled.div`
  height: 116px;
  background-color: red;
`

export const SearchContainer = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  position: fixed; 
  background: linear-gradient(rgba(18,18,18,${({ bgOpacity }) => bgOpacity}) 0%, rgba(18,18,18,${({ bgOpacity }) => bgOpacity}) 70%, rgba(18,18,18,0) 100%);
`
