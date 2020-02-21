// @ts-nocheck

import styled from 'styled-components'
import { Scrollbars } from 'react-custom-scrollbars'

export const Container = styled.nav`
  width: 200px;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  
  .menu{
    margin-top: 20px;
    
    ul{
      li{
        
      }
    }
  }
  
  .scroll-list{
    flex: 1;
    margin-top: 20px;
  }
  
  .playlist-menu{
    height: 64px;
    width: 100%;
    padding-left: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid #282828;
    transition: all 100ms ease-in-out;
    
    span{
      margin-left: 10px;
      font-size: 14px;
      letter-spacing: 0.5px;
      font-weight: 600;
    }
    
    & * {
      color: #B3B3B3;
    }
    
    &:hover *{
      color: #ffffff;
      stroke:  #ffffff;
    }
    
    &:active {
      opacity: 0.5;
    }
    
  }
  
  .thumbnail{
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #282828;
    max-height: 200px;
    transition: all 180ms ease-in-out;
    position: relative;
    overflow: hidden;
    
    &.hide{
      max-height: 0;
    border-top: none;
    }
    
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    
    button{
      opacity: 0;
      transition: all 200ms ease-in-out;
    }
    
    &:hover{      
      button{
        opacity: 1;
        background-color: rgba(0,0,0,0.5);
      }
    }
  }
`

export const Scroll = styled(Scrollbars).attrs({
})`
  width: 100%;
  height: 100%;
  
  .content{
    display: flex;
    flex-direction: column;
    width: 140px;
    margin-left: 24px;
  }
`

export const Thumb = styled.div`
  width: 8px !important;
  border-radius: 4px !important;
  background-color: #535353;
  right: 4px;
  
  &:hover, &:active{
   background-color: #B3B3B3;
  }
`
