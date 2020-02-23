import styled from 'styled-components'
import Scroll from '~/components/Scroll'

export const Container = styled(Scroll)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  .head{
    display: flex;
    flex-direction: row;
    height: 308px;
    align-items: flex-end;
    justify-content: flex-start;
    padding-bottom: 16px;
    
    .cover{
      height: 220px;
      width: 220px;
      background-color: white;
      position: relative;
      cursor: pointer;
      
      &:hover{
        .overlay{
          opacity: 1;
        }
      }
      
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 10;
      }
      
      .overlay{   
        opacity: 0;   
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 90;
      }
      
    }
    
    .info{
      display: flex;
      flex-direction: column;
      margin-left: 24px;
      
      .label{        
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 12px;
        
        span{
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          color: white;
          text-transform: uppercase;
          margin-right: 10px;
        }
        
        .check{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background-color: #2E77D0;
        }
      }
      
      h2.title{
        font-size: 48px;
        font-weight: 800;
        line-height: 48px;
        cursor: pointer;
      }
      
      p{
        font-size: 15px;
        font-weight: 500;
        color: #969696;
        margin-top: 8px;
        
        a{
          color: white;
          
          &:hover{
            text-decoration: underline;
          }
        }
      }
      
      .controls{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 21px;
        
        button.play{
          height: 32px;
          width: 108px;
          border-radius: 16px;
          background-color: #1EB954;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border: none;
          
          &:hover{
            transform: scale(1.05);
            background-color: #1FD760;
          }
          
          &:active{
            opacity: 0.6;
            transform: scale(1);
          }
          
          span{
            font-size: 12px;
            letter-spacing: 1.3px;
            color: white;
            text-transform: uppercase;
              font-weight: 600;
          }
        }        
        
        button.btn{
          height: 32px;
          width: 108px;
          border-radius: 16px;
          background-color: rgba(0,0,0,0.38);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border: 1px solid grey;
          margin-left: 12px;
          
          &:hover{
            transform: scale(1.05);
            border-color: white;
          }
          
          &:active{
            opacity: 0.6;
            transform: scale(1);
          }
          
          span{
            font-size: 12px;
            letter-spacing: 1.3px;
            color: white;
            text-transform: uppercase;
              font-weight: 600;
          }
        }
        
        button.options{
          height: 32px;
          width: 32px;
          border-radius: 50%;
          border: 1px solid #B3B3B3;
          margin-left: 12px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          
          &:hover{
            transform: scale(1.05);
            border-color: #ffffff;
          }
          
          &:active{
            opacity: 0.6;
            transform: scale(1);
          }
        }
      }
    }
  }
  
  .subhead{
    height: 68px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    padding-right: 32px;
    padding-bottom: 15px;
    
    .info{
      display: flex;
      flex-direction: row;
      align-items: center;
      
      .cover{
        height: 36px;
      
        img{
          height: 36px;
          width: 36px;
          background-color: white;
        }
      }
      
      h2.title{
        font-size: 28px;
        font-weight: 800;
        line-height: 48px;
        margin-left: 14px;
      }
    }
    
    .controls{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 21px;
      
      button.play{
        height: 32px;
        width: 108px;
        border-radius: 16px;
        background-color: #1EB954;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: none;
        
        &:hover{
          transform: scale(1.05);
          background-color: #1FD760;
        }
        
        &:active{
          opacity: 0.6;
          transform: scale(1);
        }
        
        span{
          font-size: 12px;
          letter-spacing: 1.3px;
          color: white;
          text-transform: uppercase;
            font-weight: 600;
        }
      }
      
      button.btn{
        height: 32px;
        width: 108px;
        border-radius: 16px;
        background-color: rgba(0,0,0,0.38);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 1px solid grey;
        margin-left: 12px;
        
        &:hover{
          transform: scale(1.05);
          border-color: white;
        }
        
        &:active{
          opacity: 0.6;
          transform: scale(1);
        }
        
        span{
          font-size: 12px;
          letter-spacing: 1.3px;
          color: white;
          text-transform: uppercase;
            font-weight: 600;
        }
      }
      
      button.options{
        height: 32px;
        width: 32px;
        border-radius: 50%;
        border: 1px solid #B3B3B3;
        margin-left: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        &:hover{
          transform: scale(1.05);
          border-color: #ffffff;
        }
        
        &:active{
          opacity: 0.6;
          transform: scale(1);
        }
      }
    }
  }
  
  .extra-size{
    display: block;
    height: 240px; // + 92
  }
  
  .title{
    padding: 0 32px;
    margin-top: 48px;
    
    h2{
      font-size: 16px;
      font-weight: 800;
      color: white;
    }
  }
  
  .scroll{
    width: 100%;
    margin: 0 32px;
  }
`
