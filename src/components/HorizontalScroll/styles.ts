// @ts-nocheck

import styled from 'styled-components';
import _Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1740 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1740, min: 1280 },
    items: 4
  },
  tabletmd: {
    breakpoint: { max: 1280, min: 1190 },
    items: 3
  },
  tabletsm: {
    breakpoint: { max: 1190, min: 1020 },
    items: 4
  },
  sm: {
    breakpoint: { max: 1020, min: 0 },
    items: 3
  }
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 32px;
  position: relative;
  width: ${({ width }) => width}px;
  overflow-x: hidden;
  
  .header{
    border-bottom: 1px solid #282828;
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    h2{
      font-size: 18px;
      font-weight: 900;
      line-height: 18px;
    }
    
    .controls{
      display: flex;
      flex-direction: row;
      align-items: center;
      
      button{
        width: 24px;
        height: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
        
        &:active{
          i{
            color: #A8A8A8;
          }
        }
      }
    }
  }
`

export const Carousel = styled(_Carousel).attrs({
  responsive,
  showDots: false,
  containerClass: 'carousel-container',
  draggable: false,
  swipeable: false,
  additionalTransfrom: 0,
  slidesToSlide: 1,
})`
  width: 100%;
  height: 360px;
  margin-top: 14px;
  
  ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    
    li{
      margin: 0 12px;
      
      &:first-child{
        margin-left: 0;
      }
      
      &:last-child{
        margin-right: 0;
      }
    }
  }
  
  img{
    height: 100px;
    width: 100px;
    background-color: red;
  }
  
  .item{
    
    img{
      width: ${({ itemSize }) => itemSize}px;
      height: ${({ itemSize }) => itemSize}px;
      background-color: #ffffff;      
    }
    
    h4{
      font-size: 14px;
      font-weight: 800;
      margin-top: 12px;
      line-height: 16px;
      cursor: pointer;
      
      &:hover{
        text-decoration: underline;
      }
    }
    
    p{
      font-size: 13px;
      font-weight: 600;
      color: #B3B3B3;
      margin-top: 8px;
      line-height: 20px;
      margin: 0;
      letter-spacing: 0.2px;
    }
    
    .count{
      font-size: 11px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 1.3px;
      color: #B3B3B3;
      margin-top: 8px;
    }
  }
`
