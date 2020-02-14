// @ts-nocheck

import styled from 'styled-components'
import { IconButton, Slider as MDSlider, withStyles } from '@material-ui/core'

export const Slider = withStyles({
  root: {
    color: '#404040',
    height: 8,
    padding: '5px 0'
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: '#fff',
    marginTop: -4,
    marginLeft: -6,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#B3B3B3'
  },
  rail: {
    height: 4,
    borderRadius: 2
  }
})(MDSlider)

export const Container = styled.div`
  display: flex;
  height: 88px;
  width: 100%;
  background-color: #282828;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  .music{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 16px;
    width: 275px;
    
    .thumbnail{      
      height: 56px;
      width: 56px;
      background-color: rgba(139,139,139,0.72);
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-end;
      position: relative;
      left: 0;
      transition: all 180ms ease-in-out;
      
      button{
        opacity: 0;
        transition: all 200ms ease-in-out;
      }
      
      &:hover{      
        button{
          opacity: 1;
          background-color: rgba(0,0,0,0.6);
        }
      }
      
      &.hide{
        left: -72px;
      }
    
      & > img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    
    
    
    .music-info{
      margin-left: 14px;
      display: flex;
      flex-direction: column;
      position: relative;
      transition: all 180ms ease-in-out;
      left: 0;
      
      &.hide{
        left: -72px;
      }
      
      .music-title{
        display: flex;
        flex-direction: row;
        margin-bottom: 4px;
        
        .title{
          cursor: pointer; 
          
          span{
            font-size: 14px;
            font-weight: 600;
            color: #ffffff;
            letter-spacing: 0.4px;  
        
            &:hover{
              color: #ffffff;
              border-bottom: 1px solid #ffffff;
            }
          }  
        }
      }
      
      .author-name{
        cursor: pointer;
          
        span{
          font-size: 12px;
          font-weight: 600;
          color: #999999;
          letter-spacing: 0.2px;
          padding-bottom: 2px;
                 
          &:hover{
            color: #ffffff;
            border-bottom: 1px solid #ffffff;
          }
        }
      }
    }
  }
`

export const Controls = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  .progress-slider{
    width: 500px;
    margin: 0;
    
    .MuiSlider-root{
      .MuiSlider-thumb {
        display: none !important;
      }
    
      &:hover .MuiSlider-track{
        background-color: #1EB954 !important;
      }
      
      &:hover .MuiSlider-thumb {
        display: block !important;
      }
    }
  }
  
  .buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

export const SideControls = styled.div`
  width: 275px;
`

export const ThumbButton = styled(IconButton)`
  position: absolute !important;
  top: 5px;
  right: 5px;
  
  &.MuiIconButton-colorPrimary {
    color: #ffffff !important;
  }
  
`

export const Button = styled.button`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  transition: all 200ms ease-in-out;
  margin: 0 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  &:hover *{
    fill: #ffffff;
  }
  
  &.large{
    height: 42px;
    width: 42px;
  }
  
  .control-icon{
    &.large{
      svg{
        height: 40px;
        width: 40px;
      }
    }
  
    svg{
      height: 20px;
      width: 20px;
      fill: #B3B3B3;
    }
  }
`
